/*import "./taskItem.css";

import { Link } from 'react-router-dom';

const TaskItem = ({ task, onDelete }) => {
  const { _id, title, description, status, priority, dueDate, createdAt } = task;

  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Priority:</strong> {priority}</p>
      <p><strong>Due Date:</strong> {dueDate ? new Date(dueDate).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Created:</strong> {new Date(createdAt).toLocaleString()}</p>

      <div style={styles.actions}>
         <Link to={`/edit/${_id}`} className="edit-btn">Edit</Link>
        <button onClick={() => onDelete(_id)} style={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    backgroundColor: '#f9f9f9'
  },
  actions: {
    marginTop: '10px',
    display: 'flex',
    gap: '8px'
  },
  editBtn: {
    padding: '6px 12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none'
  },
  deleteBtn: {
    padding: '6px 12px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default TaskItem;*/

//import React from 'react';
import './taskItem.css';
//import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      {/*<p>{task.description}</p>*/}
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      {/*<p><strong>Assigned To:</strong> {task.assignedTo}</p>*/}
    </div>
  );
};

export default TaskItem;
