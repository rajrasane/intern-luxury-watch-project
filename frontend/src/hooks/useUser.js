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

export const useAdminData = () => {
  return useQuery({
    queryKey: ['adminData'],
    queryFn: async () => {
      const response = await api.get('/auth/admin/data');
      return response.data;
    },
    retry: false,
  });
};