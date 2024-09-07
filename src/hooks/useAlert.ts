import { useDispatch, useSelector } from 'react-redux';
import { errorMessage, clearMessage, infoMessage, successMessage, warningMessage } from '../redux/slices/alertSlice';
import { RootState } from '../redux/store';

export const useAlert = () => {
  const dispatch = useDispatch();
  const { message, title, severity } = useSelector((state: RootState) => state.alert);

  const setErrorMessage = (message: string) => {
    dispatch(errorMessage(message));
  };

  const setInfoMessage = (message: string) => {
    dispatch(infoMessage(message));
  };

  const setWarningMessage = (message: string) => {
    dispatch(warningMessage(message));
  };
  
  const setSuccessMessage = (message: string) => {
    dispatch(successMessage(message));
  };

  const hideMessage = () => {
    dispatch(clearMessage());
  }

  

  return { message, title, severity, hideMessage, setErrorMessage, setInfoMessage, setSuccessMessage, setWarningMessage };
};