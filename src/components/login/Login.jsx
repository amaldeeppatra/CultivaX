import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = () => {
    // Your login logic here
    navigate('/dashboard'); // Navigate to the dashboard
  };

  return (
    <>
      <div className="parent">
        <div className="container">
          <div className="form_area">
            <p className="title">LOGIN</p>
            <form action="">
              <div className="form_group">
                <label className="sub_title" htmlFor="email">Email</label>
                <input placeholder="Enter your email" id="email" className="form_style" type="email" />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="password">Password</label>
                <input placeholder="Enter your password" id="password" className="form_style" type="password" />
              </div>
              <div>
                <button className="btn" type="button" onClick={handleLogin}>LOGIN</button>
                <p className="haveAcc">
                  Don't have an Account? <Link className="link" to="/signup">Sign Up!</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;