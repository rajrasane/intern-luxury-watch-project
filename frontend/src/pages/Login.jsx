import { useState } from 'react';
import { useLogin } from '../hooks/useAuth';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/profile";

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate(from, { replace: true });
        }
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen pt-16">
      <form onSubmit={handleSubmit} className="p-8 border rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        {loginMutation.isError && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {loginMutation.error?.response?.data?.message || "Login failed"}
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loginMutation.isPending}
          className="w-full bg-black text-white p-2 rounded disabled:opacity-50"
        >
          {loginMutation.isPending ? 'Logging in...' : 'Login'}
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;