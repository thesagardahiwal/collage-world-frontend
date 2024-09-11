'use client'
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import noteReducer from './slices/noteSlice';
import resourceSlice from './slices/resourceSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    note: noteReducer,
    resource: resourceSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;