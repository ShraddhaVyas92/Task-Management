import "./Login.css";

const Login = () => {
    return(
        <div className="login-page">
            <div className="login-container">
            <form className="login-form">
            <div className="mb-3">
                <label className="form-label">Username</label> <br/>
                <input type="text" className="form-control" placeholder="Enter your Username"/>
            </div> <br/>
            <div className="mb-3">
                <label className="form-label">Password</label> <br/>
                <input type="password" className="form-control" placeholder="Enter your Password"/>
            </div> <br/>
            <button className="btn btn-primary" type = "submit"><span>Continue </span></button>
            </form>
            </div>
            <div className="circle">
                <span> <strong> OR </strong> </span>
            </div>
            <div className="sign-up-link">
                <span> <a href="/signup"> Sign Up </a> </span>
            </div>
        </div>   
    )
}

export default Login;