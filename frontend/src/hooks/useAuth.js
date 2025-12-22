import { useMutation } from '@tanstack/react-query';
import api from '../api/axios';
import useAuthStore from '../store/authStore';

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (credentials) => {
      // credentials = { email, password }
      const response = await api.post('/auth/login', credentials);
      return response.data;
    },
    onSuccess: (data) => {
      // data = { user, accessToken }
      // This is where we save the token to memory!
      setAuth(data.user, data.accessToken);
    },
  });
};

export const useRegister = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (userData) => {
      // userData = { username, email, password }
      const response = await api.post('/auth/register', userData);
      return response.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
    },
  });
};