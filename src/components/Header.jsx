// src/components/Header.jsx
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <Navigation />

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          {/* Placeholder for Search Icon */}
          {/* <button className="p-1 rounded-full hover:bg-gray-200" aria-label="Search">
            <svg /* Search Icon SVG * / ></svg>
          </button> */}

          {/* Placeholder for Cart Icon */}
          {/* <button className="p-1 rounded-full hover:bg-gray-200" aria-label="Cart">
            <svg /* Cart Icon SVG * / ></svg>
          </button> */}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;