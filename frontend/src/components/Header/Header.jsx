import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <div className="dashboard-content">
            <header className="dashboard-header">
            <nav className="navbar">
                <Link to="/">Dashboard</Link> | 
                <Link to="/listTask">Task</Link> | 
                <a href="/addTask" className="add-task"> Add New Task</a>
                    <input type="search" className="search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                    
                <a href="/login" className="login-link"> Login </a>
                <a href="/signup" className="signup-link"> Sign Up</a>
            </nav>
            
            </header>
        </div>
    )
}

export default Header;