import { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1f1f1f] shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Placeholder for Cart Icon */}
          <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" className="text-black dark:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" className="text-black dark:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" className="text-black dark:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Theme Toggle */}
          <div className="flex items-center justify-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" className="text-black dark:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" className="text-black dark:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>

          <button className="px-3 py-1 rounded-md border text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
            🌐 Language
          </button>

          <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#1f1f1f]
                            border rounded-md shadow-lg
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            transition-all duration-200 z-50">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("hi")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              हिंदी
            </button>
            <button
              onClick={() => changeLanguage("mr")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              मराठी
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#1f1f1f] border-t border-gray-100 dark:border-gray-800 shadow-lg absolute w-full left-0">
          <div className="px-4 py-4 flex flex-col space-y-4">
            <Navigation className="flex flex-col space-y-4" itemClassName="text-lg block w-full py-2 border-b border-gray-50 dark:border-gray-700" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;