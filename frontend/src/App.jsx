import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./path/dashboard";
import LoginPage from "./path/login";
import SignupPage from "./path/signupPage";
import Task from "./path/addTask";
import ListTask from './path/listTask';

function App() {

  return (
    <>
      <Router>
         <Routes>
            <Route path="/" element = {<Dashboard />}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/addTask" element={<Task />} />
            <Route path="/listTask" element={<ListTask />} />
         </Routes>
      </Router>
    </>
  )
}

export default App
