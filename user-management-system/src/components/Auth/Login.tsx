import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authApi';
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const responseData = await loginUser(email, password);
      const { token, user, success, message } = responseData;
      
      if (success) {
        localStorage.setItem('authToken', token);
        dispatch(login(user));
        alert('Login successful');
        navigate('/dashboard');
      } else {
        setError(message || 'Login failed');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('An error occurred during login. Please check your credentials and try again.');
      } else {
        setError('Unexpected error occurred. Please try again.');
      }
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
      {error && <p style={{ color: 'white', marginTop: '20px' }}>{error}</p>}
    </div>
  );
};

export default Login;
