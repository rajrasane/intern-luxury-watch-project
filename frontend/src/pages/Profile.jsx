import { useProfile } from '../hooks/useUser';
import useAuthStore from '../store/authStore';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { data: user, isLoading, isError } = useProfile();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await api.post('/auth/logout');
    clearAuth();
    navigate('/login');
  };

  if (isLoading) return <div className="pt-32 text-center text-gray-500">Loading...</div>;
  if (isError) return <div className="pt-32 text-center text-red-500">Error loading profile</div>;

  return (
    <div className="pt-32 pb-20 px-4 min-h-[60vh] flex justify-center items-start">
      <div className="w-full max-w-md bg-white dark:bg-[#1f1f1f] shadow-lg rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="bg-gray-100 dark:bg-[#2a2a2a] p-6 text-center border-b border-gray-200 dark:border-gray-700">
          <div className="w-20 h-20 bg-black text-white dark:bg-white dark:text-black rounded-full mx-auto flex items-center justify-center text-3xl font-bold mb-4">
            {user?.username?.charAt(0).toUpperCase() || "U"}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user?.username}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Luxury Member</p>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
            <p className="text-lg text-gray-700 dark:text-gray-200">{user?.email}</p>
          </div>
          
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Role</label>
            <p className="text-lg text-gray-700 dark:text-gray-200 capitalize">{user?.role}</p>
          </div>

          <button 
            onClick={handleLogout}
            className="w-full mt-6 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-3 rounded-lg font-medium hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;