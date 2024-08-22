import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setUsers } from "../../redux/slices/userSlice";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user.users);
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const userId = useSelector((state: RootState) => state.auth.user?.id);

  useEffect(() => {
    if (isDashboard && userId) {
      axios
        .get(`http://localhost:3000/api/users/${userId}`)
        .then((response) => {
          dispatch(setUsers([response.data]));
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    } else {
      axios
        .get("http://localhost:3000/api/users")
        .then((response) => {
          dispatch(setUsers(response.data));
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    }
  }, [dispatch, isDashboard, userId]);

  const handleDelete = (id: number) => {
    if (window.confirm("Delete this user?")) {
      axios
        .delete(`http://localhost:3000/api/users/${id}`)
        .then((response) => {
          if (response.status === 200) {
            dispatch(setUsers(users.filter((user) => user.id !== id)));
            alert("User deleted successfully");
          } else {
            alert("Failed to delete user");
          }
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          alert("Error deleting user");
        });
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div>
      <table className="tbl">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Registration Date</th>
            {isAuthenticated && isDashboard && <th>Edit</th>}
            {isAuthenticated && isDashboard && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                {isAuthenticated && isDashboard && (
                  <>
                    <td>
                      <button onClick={() => handleEdit(user.id)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={isAuthenticated && isDashboard ? 6 : 4}>
                No users available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
