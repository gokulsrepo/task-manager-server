import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
    default: new Date()
  },
  status: {
    type: String,
    enum: ["completed", "incomplete"],
    default: "incomplete",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.model("Task", taskSchema);
