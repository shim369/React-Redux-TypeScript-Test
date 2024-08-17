import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Profile from "../components/Auth/Profile";
import PrivateRoute from "../components/Common/PrivateRoute";
import UserList from "../components/Layout/UserList";
import Settings from "../components/Layout/Settings";

function MyRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<UserList />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
    </Routes>
  );
}

export default MyRouter;
