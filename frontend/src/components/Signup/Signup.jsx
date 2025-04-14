import "./Signup.css";

const Signup = () => {
    return(
        <div className="signup-page">
            <div className="login-container">
            <form className="signup-form">
            <div className="mb-3">
                <label className="form-label">Username</label> <br/>
                <input type="text" className="form-control" placeholder="Enter your Username"/>
            </div> <br/>
            <div className="mb-3">
                <label className="form-label">Email</label> <br/>
                <input type="text" className="form-control" placeholder="Enter your Email_Id"/>
            </div> <br/>
            <div className="mb-3">
                <label className="form-label">Password</label> <br/>
                <input type="password" className="form-control" placeholder="Enter your Password"/>
            </div> <br/>
            <button className="btn btn-primary" type = "submit"><strong> Continue </strong></button>
            </form>
            </div>
        </div>   
    )
}

export default Signup;