const express = require("express");
const {
  createTask,
  readTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

// Create Task
router.route("/created").post(createTask);
router.route("/data").get(readTask);
router.route("/updatetask/:title").put(updateTask);
router.route("/deletetask/:title").delete(deleteTask);
module.exports = router;
