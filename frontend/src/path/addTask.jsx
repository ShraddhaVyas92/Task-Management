import { useEffect, useState } from 'react';
import "./addTask.css";
import Logo from '../components/Logo/logo';
import Header from '../components/Header/Header';  
import TaskForm from '../components/TaskForm/taskForm';
//import TaskList from '../components/TaskList/taskList';
import * as taskService from '../services/taskService';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then(res => setTasks(res.data));
  }, []);

  const addNewTask = async (task) => {
    const res = await taskService.addTask(task);
    setTasks([...tasks, res.data]);
  };

  return (
    <div className="task-container">
      <Logo />
      <Header />
      <div className='main-container'>
        <div className='new-task'>
          <h2>Add Task</h2>
          <TaskForm onSubmit={addNewTask} />
        </div>
        {/*<div className='list-task'>
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
        </div>*/}
      </div>
      
    </div>
  );
}

export default Task;