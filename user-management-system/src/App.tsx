import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';
import PrivateRoute from './components/Common/PrivateRoute';
import UserList from './components/Layout/UserList';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <main className='main'>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
