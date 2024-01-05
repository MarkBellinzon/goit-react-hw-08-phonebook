import { useAuth } from '../redux/useAuth';
import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ component: Component, adressTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={adressTo} /> : Component;
};
