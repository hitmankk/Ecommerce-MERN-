const app = require("./app");
const dotenv = require("dotenv");
const connerctDatabase = require("../backend/config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to unhandeled Promise Rejection`);
  process.exit(1);
});
// consfig
dotenv.config({ path: "backend/config/config.env" });

// connect database
connerctDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

// unhandeled promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandeled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
