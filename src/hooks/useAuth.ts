'use client'

import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../redux/slices/authSlice';
import { RootState } from '../redux/store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, token } = useSelector((state: RootState) => state.auth);

  const login = (userData: any) => {
    dispatch(loginSuccess(userData));
    localStorage.setItem('accessToken', userData.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  };

  const logoutUser = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    dispatch(logout());
  };

  return { user, token, isAuthenticated, login, logoutUser };
};