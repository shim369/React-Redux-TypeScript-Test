import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../redux/slices/userSlice';
import { RootState } from '../../redux/store';
import axios from 'axios';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.user.profile);
  const [name, setName] = useState(profile?.name || '');

  useEffect(() => {
    if (profile) {
      setName(profile.name);
    }
  }, [profile]);

  const handleSave = async () => {
    try {
      const response = await axios.put('/api/profile', { name });
      dispatch(setProfile(response.data.profile));
    } catch (error) {
      console.error('Profile update failed', error);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
