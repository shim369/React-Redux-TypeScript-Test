import axios, { AxiosResponse } from "axios";
import { User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get("http://localhost:3000/api/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserById = async (userId: number): Promise<User> => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const deleteUserById = async (id: number): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/users/${id}`
    );
    return response;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const fetchUserProfile = async (
  userId: string,
  token: string | null
): Promise<User> => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/users/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (
  userId: string,
  updateData: Partial<User>
): Promise<User> => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/users/${userId}`,
      updateData
    );
    return response.data;
  } catch (error) {
    console.error("Profile update failed:", error);
    throw error;
  }
};
