import React, { useState } from 'react';
import './login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  function handleSubmit(event) {
    event.preventDefault();

}

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className='input-box'>
          <input type='username' placeholder="Username"
            onChange={e => setName(e.target.value)} />
            <FaUserAstronaut className='icon' />
        </div>
        <div className='input-box'>
          <input type='email' placeholder="Email"
            onChange={e => setEmail(e.target.value)} />
            <MdOutlineEmail className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder="Password"
            onChange={e => setPassword(e.target.value)} />
          <RiLockPasswordLine className='icon' />
        </div>
        <div className="remember-forgot">
          <label><input type='checkbox' />Remember me</label>

        </div>
        <button type='submit'
        onClick={()=> navigate("/")}
        >Register</button>
        <div className='register-link'>
          <p>Already have an account?<a href="/">Login</a></p>
        </div>

      </form>
    </div>
  )
}

export default Register