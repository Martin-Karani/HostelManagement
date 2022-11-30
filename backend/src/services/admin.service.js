const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");

async function getRooms() {
  const result = await db.query(
    `SELECT room_id, hostel_name, room_no, booked
    FROM rooms `
  );
  return result;
}

async function getComplains() {
  const result = await db.query(
    `SELECT complains_id, complains, created_at, from
      FROM complains `
  );
  return result;
}

async function createNotice({ noticeTitle, notice_details }) {
  const result = await db.query(
    `INSERT INTO notice
    (notice_title, notice_details, created_at)
    VALUES
    (?, ?, ?)`,
    [
      noticeTitle,
      notice_details,
      new Date().toISOString().slice(0, 19).replace("T", " "),
    ]
  );

  let message = "Error in creating notice";

  if (result.affectedRows) {
    message = "notice created successfully";
  }

  return { message };
}

// async function update(id, student) {
//   const result = await db.query(
//     `UPDATE students
//     SET full_name=?, email=?, phone_no=?,
//     guardian_name=?, guardian_phone=?,password=?,gender=?
//     WHERE student_id=?`,
//     [
//       student.full_name,
//       student.email,
//       student.phone_no,
//       student.guardian_name,
//       student.guardian_phone,
//       student.password,
//       student.gender,
//       id,
//     ]
//   );

//   let message = "Error in updating programming language";

//   if (result.affectedRows) {
//     message = "student updated successfully";
//   }

//   return { message };
// }

// async function remove(id) {
//   const result = await db.query(`DELETE FROM students WHERE student_id=?`, [
//     id,
//   ]);

//   let message = "Error in deleting programming language";

//   if (result.affectedRows) {
//     message = "student deleted successfully";
//   }

//   return { message };
// }

module.exports = {
  getRooms,
  getComplains,
  createNotice,
  //   update,
  //   remove,
};
