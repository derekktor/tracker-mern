import axios from "axios";

const API_URL = "/api/habits/";

/**
 * @description Create habit
 * @path POST /api/habits
 * @param {Object} habitData object with name and amount fields
 * @param {String} token identifier for a user
 * @returns success message that the user created a habit
 */
const createHabit = async (habitData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, habitData, config);
  return res.data;
};

// Fetch habits
const fetchHabits = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(API_URL, config);

  return res.data;
};

const deleteHabit = async (habitId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.delete(`${API_URL}${habitId}`, config);

  return res.data;
};

const habitsService = {
  fetchHabits,
  createHabit,
  deleteHabit
};

export default habitsService;
