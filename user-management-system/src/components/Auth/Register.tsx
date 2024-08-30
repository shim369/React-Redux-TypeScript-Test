import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/authApi';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password) {
      setErrorMessage('Please complete all fields.');
      return;
    }

    try {
      await registerUser(username, email, password);
      alert('Registration successful');
      navigate('/');
    } catch (error) {
      console.error('Registration failed', error);
      setErrorMessage('Registration failed. Please try again.');
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
      {errorMessage && <p style={{ color: 'white', marginTop: '10px' }}>{errorMessage}</p>}
    </div>
  );
};

export default Register;
