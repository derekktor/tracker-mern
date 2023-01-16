import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import habitsService from "./habitsService";

const initialState = {
  habits: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

/**
 * @name createHabit
 * @description creates new habit for a logged in user
 */
export const createHabit = createAsyncThunk(
  "habits/createHabit",
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

/**
 * @name fetchHabits
 * @description fetches a list of habits for a user
 */
export const fetchHabits = createAsyncThunk(
  "habits/fetchHabits",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await habitsService.fetchHabits(token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * @name deleteHabit
 * @description deletes a habit by its ID
 */
export const deleteHabit = createAsyncThunk(
  "habits/deleteHabit",
  async (habitId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await habitsService.deleteHabit(habitId, token);
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
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createHabit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHabit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.habits.push(action.payload);
      })
      .addCase(createHabit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(fetchHabits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.habits = action.payload;
      })
      .addCase(fetchHabits.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteHabit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteHabit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.habits = state.habits.filter(
          (habit) => habit._id !== action.payload.id
        );
      })
      .addCase(deleteHabit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = habitsSlice.actions;
export default habitsSlice.reducer;
