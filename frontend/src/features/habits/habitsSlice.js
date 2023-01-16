import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import habitsService from "./habitsService";

const initialState = [];

/**
 * @name createHabit
 * @description creates new habit for a logged in user
 */
export const createHabit = createAsyncThunk(
  "habits/create",
  async (habitData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await habitsService.createHabit(habitData, token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {},
});

export default habitsSlice.reducer;
