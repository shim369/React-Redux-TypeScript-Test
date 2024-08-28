import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Profile from "../components/Auth/Profile";
import UserList from "../components/Layout/UserList";
import Settings from "../components/Layout/Settings";
import Dashboard from "../components/Layout/Dashboard";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<UserList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:userId" element={<Profile />} />
    </Routes>
  );
}

export default MyRouter;
