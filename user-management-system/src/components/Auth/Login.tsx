import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
      const { token, user } = response.data;
      
      if (response.data.success) {
        localStorage.setItem('authToken', token);
        dispatch(login(user));
        alert('Login successful');
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('An error occurred during login. Please check your credentials and try again.');
      } else {
        setError('Unexpected error occurred. Please try again.');
      }
      console.error('Login failed', error);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
