import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from '../features/habits/habitsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
    users: usersReducer,
  },
});
