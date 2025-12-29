import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const PublicRoute = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  // If user is already logged in, redirect to home
  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
