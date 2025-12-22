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

// Auth Components
import PersistLogin from './components/PersistLogin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* PersistLogin wraps ALL routes to check for session on load */}
            <Route element={<PersistLogin />}>
              
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>

            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;