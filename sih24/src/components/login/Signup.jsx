import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  return (
    <>
    <div className="parent">
        <div class="container">
                <div class="form_area">
                    <p class="title">SIGN UP</p>
                    <form action="">
                        <div class="form_group">
                            <label class="sub_title" for="name">Name</label>
                            <input placeholder="Enter your full name" class="form_style" type="text"/>
                        </div>
                        <div class="form_group">
                            <label class="sub_title" for="email">Email</label>
                            <input placeholder="Enter your email" id="email" class="form_style" type="email"/>
                        </div>
                        <div class="form_group">
                            <label class="sub_title" for="password">Password</label>
                            <input placeholder="Enter your password" id="password" class="form_style" type="password"/>
                        </div>
                        <div>
                            <button class="btn">SIGN UP</button>
                            <p className='haveAcc'>Have an Account? <a class="link" href=""><Link to="/">Login Here!</Link></a></p><a class="link" href="">
                        </a></div><a class="link" href="">
                    
                </a></form></div><a class="link" href="">
            </a></div>
    </div>
        
    </>
  )
}

export default Login