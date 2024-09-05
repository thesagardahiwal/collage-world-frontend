import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../redux/slices/authSlice';
import { RootState } from '../redux/store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const login = (userData: any) => {
    dispatch(loginSuccess(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { user, isAuthenticated, login, logoutUser };
};