//require('dotenv').config();
import axios from 'axios';


const API_URL = 'http://10.0.0.16:3000/api'; // Your backend URL

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('userAPI.js Error registering user:', error.response.data.code);
    return error.response.data;
  }
};

export const signInUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('userAPI.js Error signing in user:', error.response.data);
    return error.response.data;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('userAPI.js Error fetching users:', error);
  }
};
