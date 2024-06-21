import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/taskSchema.js";

export const createTask = catchAsyncErrors(async (req, res, next) => {
  const { title, description, dueDate } = req.body;
  const task = await Task.create({
    title,
    description,
    dueDate,
  });
  res.status(200).json({
    success: true,
    task,
    message: "Task Created",
  });
});

export const deleteTask = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not found!", 400));
  }
  await task.deleteOne();
  res.status(200).json({
    success: true,
    message: "Task Deleted!",
  });
});

export const updateTask = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not found!", 400));
  }
  task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Task Updated!",
    task,
  });
});

export const getMyTask = catchAsyncErrors(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({
    success: true,
    tasks,
  });
});

export const getSingleTask = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not found!", 400));
  }
  res.status(200).json({
    success: true,
    task,
  });
});
