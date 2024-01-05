import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/useAuth';

export const PrivateRoute = ({ component: Component, adressTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const sendTo = !isLoggedIn && !isRefreshing;
  return sendTo ? <Navigate to={adressTo} /> : Component;
};
