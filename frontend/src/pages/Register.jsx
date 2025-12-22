import { useState } from 'react';
import { useRegister } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const registerMutation = useRegister();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate(formData, {
      onSuccess: () => navigate('/profile')
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen pt-16">
      <form onSubmit={handleSubmit} className="p-8 border rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        
        {registerMutation.isError && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {registerMutation.error?.response?.data?.message || "Registration failed"}
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>

        <button
          type="submit"
          disabled={registerMutation.isPending}
          className="w-full bg-black text-white p-2 rounded disabled:opacity-50"
        >
          {registerMutation.isPending ? 'Creating Account...' : 'Register'}
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;