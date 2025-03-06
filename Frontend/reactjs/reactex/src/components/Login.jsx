import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  // const [mess, setMess] = useState('');
  const [log, setLog] = useState({
    email: '',
    password: ''
  });

  const handle = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/users/login', log)
      .then(res => {
        alert(res.data.message);
        navigate('/')
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleLog = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container1">
      <div className='login-container2'>
      <form onSubmit={handle}>
      <h2  className='header'>Login Page</h2><br></br>
      <table>
        <tr>
        <td><label>Email:</label></td>
        <td><input type="text" name="email" value={log.email} onChange={handleLog} placeholder="Enter your email"/></td>
        </tr>
        <tr>
        <td><label>Password:</label></td>
        <td><input type="password" name="password" value={log.password} onChange={handleLog} placeholder="Enter your password"/></td>
        </tr>
        </table>
        <button type="submit" className='login-btn'>LOGIN</button>
        
        {/* <p className="error-message">{mess}</p> */}
      </form>
    </div>
    </div>
  );
}