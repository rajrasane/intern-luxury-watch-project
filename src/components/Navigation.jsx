// src/components/Navigation.jsx
import React from 'react';

const Navigation = ({ className = "flex space-x-8", itemClassName = "text-sm" }) => {
  const navLinks = [
    { name: 'Featured', href: '#featured' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-roboto font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 ${itemClassName}`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;