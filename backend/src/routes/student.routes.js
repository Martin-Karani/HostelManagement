const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

/* GET studentController */
router.get("/", studentController.get);
router.get("/rooms", studentController.getRooms);

router.get("/notices", studentController.getNotices);
router.post("/createComplain", studentController.createComplain);
router.post("/book", studentController.bookBed);

/* POST studentController */
router.post("/signup", studentController.signUp);

router.post("/login", studentController.signin);

// router.post("/student/book", studentController.book);
/* PUT studentController*/
router.put("/:id", studentController.update);

/* DELETE studentController */
router.delete("/:id", studentController.remove);

module.exports = router;
