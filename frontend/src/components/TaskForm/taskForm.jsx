import { useState, useEffect } from 'react';
import "./taskForm.css";

const TaskForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: '',
    priority: 'medium',
    ...initialData
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Call the onSubmit function passed from the parent
    onSubmit(formData);

    // Reset form fields after submit
    setFormData({
      title: '',
      description: '',
      status: 'pending',
      dueDate: '',
      priority: 'medium',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Task Description</label>
        <textarea
          className="form-control"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Task Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-control"
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input
          className="form-control"
          name="dueDate"
          type="date"
          value={formData.dueDate?.substring(0, 10)}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Priority</label>
        <select
          className="form-control"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit" className='btn btn-dark'>Submit</button>
    </form>
  );
};

export default TaskForm;
