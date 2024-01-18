import React, { useState } from 'react';
import './login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaUserAstronaut } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

    }
    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input value={username} placeholder="Username"
                        onChange={e => setUsername(e.target.value)} />
                    <FaUserAstronaut className='icon' />
                </div>
                <div className='input-box'>
                    <input value={password} placeholder="Password"
                        onChange={e => setPassword(e.target.value)} />
                    <RiLockPasswordLine className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type='checkbox' />Remember me</label>
                    <p><Link to="/forgotPassword">forgot Password</Link></p>
                </div>
                <button type='submit' 
                onClick={()=> navigate("/home")}>Login</button>
                
                <div className='register-link'>
                    <p><Link to="/register">Register here</Link></p>
                </div>

            </form>
        </div>
    )
};

export default Login