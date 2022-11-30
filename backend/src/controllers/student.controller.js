const student = require("../services/student.service");
const admin = require("../services/admin.service");

async function get(req, res, next) {
  try {
    console.log(req.query.page);
    res.json(await student.getMultiple(1));
  } catch (err) {
    console.error(`Error while getting student`, err.message);
    next(err);
  }
}
async function messages(req, res, next) {
  try {
    console.log(req.query);
    res.json(await student.messages(req.query.id));
  } catch (err) {}
}
async function getRooms(req, res, next) {
  try {
    res.json(await admin.getRooms());
  } catch (err) {
    console.error(`Error while getting student`, err.message);
    next(err);
  }
}
async function getNotices(req, res, next) {
  try {
    res.json(await student.getNotices());
  } catch (err) {
    console.error(`Error while creating complain`, err.message);
    next(err);
  }
}
async function getComplains(req, res, next) {
  try {
    res.json(await student.getComplains());
  } catch (err) {
    console.error(`Error while creating complain`, err.message);
    next(err);
  }
}

async function message(req, res, next) {
  try {
    res.json(await student.message(req.body));
  } catch (err) {
    console.error(`Error while sending message`, err.message);
    next(err);
  }
}
async function createComplain(req, res, next) {
  try {
    res.json(student.createComplain(req.body));
  } catch (error) {
    console.error(`Error while creating complain`, err.message);
    next(err);
  }
}
async function signUp(req, res, next) {
  try {
    res.json(await student.create(req.body));
  } catch (err) {
    console.error(`Error while creating student`, err.message);
    next(err);
  }
}
async function bookBed(req, res, next) {
  try {
    res.json(await student.bookBed(req.body));
  } catch (error) {}
}

async function signin(req, res, next) {
  try {
    res.json(await student.login(req.body));
  } catch (err) {
    console.error(`Error while logging student`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await student.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating student`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await student.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting student`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  getRooms,
  bookBed,
  signUp,
  update,
  remove,
  createComplain,
  getComplains,
  message,
  messages,
  getNotices,
  signin,
};
