const express = require("express");

const adminControllers = require("../controllers/admin.controller");
const router = express.Router();

router.post("/createNotice", adminControllers.createNotice);
// router.post('/login', adminControllers.adminLogin);
router.get("/rooms", adminControllers.getRooms);

module.exports = router;
