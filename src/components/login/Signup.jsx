import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({ fullName: '', email: '', password: '' });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', signupData);

      console.log('Response:', response); // Debugging: Check if the response is correct

      if ((response.status === 200 || response.status === 201) && response.data.success) {
        const { fullName } = response.data;

        // Debugging: Check if fullName is received correctly
        console.log("Full Name: ", fullName);

        // Store user details in localStorage
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', signupData.email);

        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        console.error('Signup failed', response.data);
      }
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <>
      <div className="parent">
        <div className="container">
          <div className="form_area">
            <p className="title">SIGN UP</p>
            <form onSubmit={handleSignup}>
              <div className="form_group">
                <label className="sub_title" htmlFor="name">Name</label>
                <input
                  placeholder="Enter your full name"
                  name="fullName"
                  className="form_style"
                  type="text"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="email">Email</label>
                <input
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  className="form_style"
                  type="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="password">Password</label>
                <input
                  placeholder="Enter your password"
                  id="password"
                  name="password"
                  className="form_style"
                  type="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
              </div>
              <div>
                <button className="btn" type="submit">SIGN UP</button>
                <p className="haveAcc">
                  Have an Account? <Link className="link" to="/">Login Here!</Link>
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