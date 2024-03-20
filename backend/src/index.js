const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const cors = require("cors");
require("./db/connection");
const createTask = require("./routes/createTask");
// Middlewares Configuration
app.use(express.json());
app.use(cors());
app.use("/api/v1", createTask);

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, (req, res) => {
  console.log(`I am listening on ${port}`);
});
