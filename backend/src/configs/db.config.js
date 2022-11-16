const env = process.env;

const db = {
  host: env.DB_HOST || "localhost",
  user: env.DB_USER || "karani",
  password: env.DB_PASSWORD || "password",
  database: env.DB_NAME || "hostel_management",
  // port: env.DB_PORT || 3306,
  // ssl: {
  //   mode: "VERIFY_IDENTITY",
  //   ca: fs.readFileSync("/etc/ssl/cert.pem", "utf-8"),
  // },
};

module.exports = db;
