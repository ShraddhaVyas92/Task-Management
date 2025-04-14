// models/User.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: String,
    status: {
      type: String,
      enum: ['pending', 'in progress', 'completed'],
      default: 'pending'
    },
    dueDate: Date,
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium'
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date
  });
  
  TaskSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
  });
  
  const Task = mongoose.model('Task', TaskSchema);
  export { Task }