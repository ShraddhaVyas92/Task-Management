/*import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../../services/taskService';
import TaskItem from '../TaskItem/taskItem';
import { Link } from 'react-router-dom';
import './taskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="tasklist-container">
      <h2 className="tasklist-header">Task List</h2>
      <Link to="/create" className="create-task-btn">+ Create New Task</Link>

      {tasks.length === 0 ? (
        <p className="tasklist-empty">No tasks found.</p>
      ) : (
        <ul className="tasklist-items">
          {tasks.map(task => (
            <li key={task._id}>
              <TaskItem task={task} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;*/

import { useEffect, useState } from 'react'; 
import { getTasks } from '../../services/taskService';
import TaskItem from '../TaskItem/taskItem';
import { Link } from 'react-router-dom';
import './taskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  return (
    <div className="tasklist-container">
      <h2 className="tasklist-header">Task List</h2>
      <Link to="/addTask" className="create-task-btn">+ Create New Task</Link>

      {tasks.length === 0 ? (
        <p className="tasklist-empty">No tasks found.</p>
      ) : (
        <ul className="tasklist-items">
          {tasks.map(task => (
            <li key={task._id}>
              <TaskItem task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
