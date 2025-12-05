// src/components/ThemeToggle.jsx
import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    // Placeholder for theme switching logic
    console.log('Toggle theme');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default ThemeToggle;