// const db = require("./db.service");
// const helper = require("../utils/helper.util");
// const config = require("../configs/general.config");

// async function getMe(page = 1) {
//   const offset = helper.getOffset(page, config.listPerPage);
//   console.log(offset);
//   const rows = await db.query(
//     `SELECT student_id, full_name, phone_no, guardian_name, guardian_phone, created_in
//     FROM students `
//   );
//   console.log(rows);
//   const data = helper.emptyOrRows(rows);
//   const meta = { page };

//   return {
//     data,
//     meta,
//   };
// }

// async function create(student) {
//   console.log(student);
//   const result = await db.query(
//     `INSERT INTO students
//     (full_name, email, gender, phone_no, password,guardian_name,national_id,guardian_phone,created_in)
//     VALUES
//     (?, ?, ?, ?, ?, ?,?,?,?)`,
//     [
//       student.full_name,
//       student.email,
//       student.gender,
//       student.phone_no,
//       student.password,
//       student.guardian_name,
//       student.national_id,
//       student.guardian_phone,
//       new Date().toISOString().slice(0, 19).replace("T", " "),
//     ]
//   );

//   let message = "Error in creating student";

//   if (result.affectedRows) {
//     message = "Student created successfully";
//   }

//   return { message };
// }

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

// module.exports = {
//   getMultiple,
//   create,
//   update,
//   remove,
// };
