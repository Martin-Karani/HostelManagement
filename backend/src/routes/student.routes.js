const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

/* GET studentController */
router.get("/", studentController.get);

/* POST studentController */
router.post("/signup", studentController.signUp);

/* PUT studentController*/
router.put("/:id", studentController.update);

/* DELETE studentController */
router.delete("/:id", studentController.remove);

module.exports = router;
