const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;
const studentRouter = require("./src/routes/student.routes");
const adminRouter = require("./src/routes/admin.routes");

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/student", studentRouter);
app.use("/admin", adminRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Hostel Management app listening at http://localhost:${port}`);
});
