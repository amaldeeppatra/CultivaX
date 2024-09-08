import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './login.css';

axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', loginData);

      if ((response.status === 200 || response.status === 201) && response.data.success) {
        const { token, fullName } = response.data;

        // Store user details in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('email', loginData.email);
        localStorage.setItem('fullName', fullName); // Set fullName in localStorage

        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        console.error('Signin failed');
      }
    } catch (error) {
      console.error('Signin failed', error);
    }
  };

  return (
    <>
      <div className="parent">
        <div className="container">
          <div className="form_area">
            <p className="title">LOGIN</p>
            <form onSubmit={handleLogin}>
              <div className="form_group">
                <label className="sub_title" htmlFor="email">Email</label>
                <input placeholder="Enter your email" id="email" className="form_style" type="email" name="email" onChange={handleLoginChange} />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="password">Password</label>
                <input placeholder="Enter your password" id="password" className="form_style" type="password" name="password" onChange={handleLoginChange} />
              </div>
              <div>
                <button className="btn" type="submit">LOGIN</button>
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
