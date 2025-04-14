import "./dashboard.css";
import Logo from '../components/Logo/logo';
import Header from '../components/Header/Header';  
//import TaskForm from '../components/TaskForm/taskForm';
import TaskList from '../components/TaskList/taskList';
import { useEffect, useState } from 'react';
import * as taskService from '../services/taskService';

const ListTask = () => {
const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then(res => setTasks(res.data));
  }, []);

  
  return (
    <div className="dashboard">
      <Logo />
      <Header />
      <div className='main-container'>
        <div className='list-task'>
        <TaskList tasks={tasks} />
        </div>
      </div>
      
    </div>
  );
}

export default ListTask;