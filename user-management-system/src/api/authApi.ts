import axios from "axios";
import { User } from "../types/user";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

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
    const response = await axios.post(`${apiBaseUrl}/login`, {
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
      `${apiBaseUrl}/register`,
      { username, email, password }
    );
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};
