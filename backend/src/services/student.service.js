const bcrypt = require("bcrypt");
const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  console.log(offset);
  const rows = await db.query(
    `SELECT  full_name, phone_no,  guardian_phone 
    FROM students `
  );

  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}
async function getNotices() {
  const result = await db.query(
    `SELECT notice_details, notice_title 
    FROM notice `
  );
  return result;
}
async function getComplains() {
  const result = await db.query(
    `SELECT complain, from_id 
    FROM complains `
  );
  return result;
}

async function getStudent(email) {
  const result = await db.query(
    `SELECT full_name, phone_no, guardian_phone 
    FROM students WHERE email=? `,
    [email]
  );

  return result[0];
}

async function message(props) {
  console.log(props);
  const result = await db.query(
    `INSERT INTO messages (message, from_id, to_id, created_at)
    VALUES (?,?,?,?)`,
    [
      props.message,
      props.student_id.toString(),
      props.to_id.toString(),
      new Date().toISOString().slice(0, 19).replace("T", " "),
    ]
  );
  let message = "Error in sending Message";

  if (result.affectedRows) {
    message = "sent message successfully";
  }
  return { message };
}
async function messages(id) {
  console.log(id);
  const result = await db.query(
    `SELECT message, from_id, created_at 
    FROM messages WHERE to_id=?`,
    [id]
  );
  return result;
}
async function login({ email, password }) {
  const user = await db.query(
    `SELECT student_id, full_name, email, gender, phone_no, password, profile_info ,national_id, guardian_phone,profile_img,is_admin 
    FROM students WHERE email=? `,
    [email]
  );
  if (user[0]) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(password, user[0].password);
    if (validPassword) {
      return user[0];
    } else {
      return { error: "Invalid Password" };
    }
  } else {
    return { error: "User does not exist" };
  }
}
async function bookBed({ email, room_id }) {
  const student = await getStudent(email);
  if (!student) return { error: "Student not in the system" };
  console.log(student);
  if (student.bookedRoom !== undefined)
    return { error: "Student Already Has Booked the room" };

  const resultStudent = await db.query(
    `UPDATE students 
      SET bookedRoom=?, 
      WHERE email=?`,
    [room_id, email]
  );
  const result = await db.query(
    `UPDATE rooms 
     SET booked=?
     WHERE room_id=?`,
    [true, room_id]
  );
  let message = "Error in booking";

  if (result.affectedRows && resultStudent.affectedRows) {
    message = "Room booked successfully";
  }

  return message;
}
async function createComplain({ student, complain }) {
  console.log(complain);
  const result = await db.query(
    `INSERT INTO complains (complain, from_id, created_at)
    VALUES (?,?,?)`,
    [complain, student, new Date().toISOString().slice(0, 19).replace("T", " ")]
  );
  let message = "Error in creating Complain";

  if (result.affectedRows) {
    message = "create complain successfully";
  }
  return { message };
}
async function create(student) {
  const studentExists = await getStudent(student.email);
  let message;
  console.log("studentExists");
  if (studentExists) return { error: "Student Already in the system" };

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(student.password, salt);
  const result = await db.query(
    `INSERT INTO students 
    (full_name, email, gender, phone_no, password, profile_info ,national_id, guardian_phone,profile_img,created_at,is_admin) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      student.name,
      student.email,
      student.gender,
      parseInt(student.phone_no),
      hashedPassword,
      student.profile_info,
      parseInt(student.national_id),
      parseInt(student.guardian_phone),
      null,
      new Date().toISOString().slice(0, 19).replace("T", " "),
      false,
    ]
  );

  message = "Error in creating student";

  if (result.affectedRows) {
    message = "Student created successfully";
  }

  return { message };
}

async function update(id, student) {
  const result = await db.query(
    `UPDATE students 
    SET full_name=?, email=?, phone_no=?, 
    profile_info=?, guardian_phone=?,password=?,gender=? 
    WHERE student_id=?`,
    [
      student.full_name,
      student.email,
      student.phone_no,
      student.profile_info,
      student.guardian_phone,
      student.password,
      student.gender,
      id,
    ]
  );

  let message = "Error in updating programming language";

  if (result.affectedRows) {
    message = "student updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM students WHERE student_id=?`, [
    id,
  ]);

  let message = "Error in deleting programming language";

  if (result.affectedRows) {
    message = "student deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  message,
  messages,
  update,
  getNotices,
  getComplains,
  remove,
  bookBed,
  createComplain,
  login,
};
