import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await api.get('/auth/profile');
      return response.data;
    },
  });
};

export const useAdmin = () => {
  return useQuery({
    queryKey: ['admin'],
    queryFn: async () => {
      const response = await api.get('/auth/admin');
      return response.data;
    },
    retry: false,
  });
};