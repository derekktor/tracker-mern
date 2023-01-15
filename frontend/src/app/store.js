import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from '../features/habits/habitsSlice';
import usersReducer from '../features/users/usersSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
    users: usersReducer,
    auth: authReducer,
  },
});
