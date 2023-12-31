import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css"

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:4000/api/register', { username,email, password });
      console.log('Registration successful!');
      // Redirect to login or handle as needed
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Registration form</h2>
      <input className='boxes' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input className='boxes' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <input className='boxes' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;




