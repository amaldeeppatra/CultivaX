import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  return (
    <>
    <div className="parent">
        <div class="container">
                <div class="form_area">
                    <p class="title">LOGIN</p>
                    <form action="">
                        <div class="form_group">
                            <label class="sub_title" for="email">Email</label>
                            <input placeholder="Enter your email" id="email" class="form_style" type="email"/>
                        </div>
                        <div class="form_group">
                            <label class="sub_title" for="password">Password</label>
                            <input placeholder="Enter your password" id="password" class="form_style" type="password"/>
                        </div>
                        <div>
                            <button class="btn">LOGIN</button>
                            <p className='haveAcc'>Don't have an Account? <a class="link" href=""><Link to="/signup">Sign Up!</Link></a></p><a class="link" href="">
                        </a></div><a class="link" href="">
                    
                </a></form></div><a class="link" href="">
            </a></div>
    </div>
        
    </>
  )
}

export default Login