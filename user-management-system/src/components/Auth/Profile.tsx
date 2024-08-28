import { User } from '../../redux/types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../redux/slices/userSlice';
import { RootState } from '../../redux/store';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.user.profile as User | null);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userId) {
      const fetchProfile = async () => {
        const token = localStorage.getItem('authToken');
        try {
          const response = await axios.get(`http://localhost:3000/api/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          dispatch(setProfile(response.data));
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error('Failed to fetch profile:', error.response?.data || error.message);
          } else {
            console.error('Unexpected error:', error);
          }
        }
      };
      fetchProfile();
    }
  }, [dispatch, userId]);
  
  const handleSave = async () => {
    try {
      if (userId) {
        const updateData: Partial<User> = { username, email };
  
        if (password) {
          updateData.password = password;
        }
  
        await axios.put(`http://localhost:3000/api/users/${userId}`, updateData);
  
        if (profile && profile.id) {
          dispatch(setProfile({ ...profile, username, email }));
        } else {
          alert('Failed to update profile. Please try again.');
        }
  
        alert('Profile updated successfully');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Profile update failed:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      alert('Failed to update profile. Please try again.');
    }
  };

  useEffect(() => {
    if (profile) {
      setUsername(profile.username);
      setEmail(profile.email);
    }
  }, [profile]);
  

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='edit-profile'>
      <h2>Profile</h2>

      <div>
        <label>ID</label>
        <span>{profile.id}</span>
      </div>

      <div>
        <label>Registration Date</label>
        <span>{profile.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}</span>
      </div>

      <div>
        <label>Username</label>
        <input 
          id="username"
          type="text" 
          value={username} 
          autoComplete="off" 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

      <div>
        <label>Email</label>
        <input 
          id="email"
          type="email" 
          value={email} 
          autoComplete="off" 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div>
        <label>Password</label>
        <input 
          id="password"
          type="password" 
          value={password} 
          autoComplete="off" 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password if you want to change it"
        />
      </div>

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
