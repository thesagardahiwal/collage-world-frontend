'use client'

import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../redux/slices/authSlice';
import { RootState } from '../redux/store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const login = (userData: any) => {
    dispatch(loginSuccess(userData.user));
    localStorage.setItem('accessToken', userData.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  };

  const logoutUser = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    dispatch(logout());
  };

  return { user, isAuthenticated, login, logoutUser };
};