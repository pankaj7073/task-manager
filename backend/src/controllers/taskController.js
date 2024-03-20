const Task = require("../models/task");

// Create Task
const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.create({
      title: title,
      description: description,
    });
    res.json({
      title: task.title,
      description: task.description,
    });
  } catch (err) {
    res.status(404);
    throw new Error("task is not created", err.message);
  }
};

// Read Task
const readTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.json({
      task,
    });
  } catch (err) {
    res.status(404);
    throw new Error("task not find", err.message);
  }
};

// Update Task data
const updateTask = async (req, res) => {
  // console.log("req----", req);
  const title = req.params.title;
  console.log("reqtttt----", title);
  try {
    const result = await Task.findOne({ title: title });
    if (result) {
      result.title = req.body.title || Task.title;
      console.log(result.title, "ressssssss");
      result.description = req.body.description || Task.description;
      console.log(result);
      var updateTaskData = await result.save();
      res.json(updateTaskData);
    }
  } catch (err) {
    console.log("Not Updated", err);
  }
};

// Delete Task Data
const deleteTask = async (req, res) => {
  const title = req.params.title;
  try {
    const delDate = await Task.deleteOne({ title });
    res.json(delDate);
  } catch (err) {
    console.log("Not Deleted", err);
  }
};

module.exports = { createTask, readTask, updateTask, deleteTask };
