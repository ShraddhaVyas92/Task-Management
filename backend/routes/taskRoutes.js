import express from "express";
import { Task } from "../models/taskModel.js";

const taskRoute = express.Router();

taskRoute.post('/', async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // READ All Tasks
  taskRoute.get('/', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // READ Single Task
  taskRoute.get('/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // POST create task
  taskRoute.post('/', async (req, res) => {
    try {
      const task = new Task(req.body);
      const savedTask = await task.save();
      res.status(201).json(savedTask);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // PUT update task
  taskRoute.put('/:id', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedTask);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE task
 taskRoute.delete('/:id', async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.json({ message: 'Task deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
export { taskRoute };