import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/authApi';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registerUser(username, email, password);
      alert('Registration successful');
      navigate('/');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input 
        id="username"
        type="text" 
        placeholder="Username" 
        value={username} 
        autoComplete="off" 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        id="email"
        type="email" 
        placeholder="Email" 
        value={email} 
        autoComplete="off" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        id="password"
        type="password" 
        placeholder="Password" 
        value={password} 
        autoComplete="off" 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
