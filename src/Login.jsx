import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', { username, password });
      const token = response.data.token;
      // Save the token in localStorage or a state management system
      console.log('Login successful! Token:', token);
    
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2 style={{color:"black"}}>Login</h2>
      <input className='boxes1' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input className='boxes1' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button style={{color:"azure", backgroundColor:'black'}}  onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
