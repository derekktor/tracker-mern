import axios from "axios";

const API_URL = "/api/users/";

/**
 * POST /api/users/ request to create new user
 * @param {Object} userData object with name, email and password fields
 * @returns success message with user's token or a failure message
 */
const register = async (userData) => {
  const res = await axios.post(API_URL, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

/**
 * POST /api/users/login request to insert user's token into Authorization header
 * @param {Object} userData object with email and password fields
 * @returns success message with a user-specific token or failure message
 */
const login = async (userData) => {
  const res = await axios.post(`${API_URL}login`, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

/**
 * Removes the saved user token from localStorage
 */
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
