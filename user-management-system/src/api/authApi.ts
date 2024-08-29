import axios from "axios";
import { User } from "../types/user";

export const loginUser = async (
  email: string,
  password: string
): Promise<{
  token: string;
  user: User;
  success: boolean;
  message?: string;
}> => {
  try {
    const response = await axios.post("http://localhost:3000/api/users/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const registerUser = async (
  username: string,
  email: string,
  password: string
): Promise<{ user: User; success: boolean; message?: string }> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/register",
      { username, email, password }
    );
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};
