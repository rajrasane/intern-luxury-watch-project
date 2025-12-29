import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import './index.css';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';

// Auth Components
import PersistLogin from './components/PersistLogin';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
        <Header />
        
        <main className="grow">
          <Routes>
            {/* PersistLogin wraps ALL routes to check for session on load */}
            <Route element={<PersistLogin />}>
              
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              
              {/* Public-only Routes (redirects if logged in) */}
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>

              {/* Admin Routes */}
              <Route element={<ProtectedRoute requiredRole="admin" />}>
                <Route path="/admin" element={<Admin />} />
              </Route>

              {/* 404 Catch-all */}
              <Route path="*" element={<NotFound />} />

            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;