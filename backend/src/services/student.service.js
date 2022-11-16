const bcrypt = require("bcrypt");
const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  console.log(offset);
  const rows = await db.query(
    `SELECT student_id, full_name, phone_no, guardian_name, guardian_phone, created_in 
    FROM students `
  );
  console.log(rows);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getStudent(email) {
  const result = await db.query(
    `SELECT student_id, full_name, phone_no, guardian_name, guardian_phone, created_in 
    FROM students WHERE email=? `,
    [email]
  );
  console.log(result);
  return result;
}
async function login(para) {
  const user = await db.query(
    `SELECT student_id, full_name, phone_no, guardian_name, guardian_phone, created_in 
    FROM students WHERE email=? `,
    [email]
  );
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      res.status(200).json({ message: "Valid password", ...user });
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
}
async function create(student) {
  const studentExists = await getStudent(student.email);
  let message;
  console.log(studentExists);
  if (studentExists) return (message = "Student Already in the system");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(student.password, salt);

  const result = await db.query(
    `INSERT INTO students 
    (full_name, email, gender, phone_no, password, profile_info ,national_id, guardian_phone,profile_img,created_in) 
    VALUES 
    (?, ?, ?, ?, ?, ?,?,?,?,?)`,
    [
      student.full_name,
      student.email,
      student.gender,
      student.phone_no,
      hashedPassword,
      student.profile_info,
      student.national_id,
      student.guardian_phone,
      student.profile_img,
      new Date().toISOString().slice(0, 19).replace("T", " "),
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
  update,
  remove,
  login,
};
