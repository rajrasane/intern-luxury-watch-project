// src/components/Navigation.jsx
import React from 'react';

const Navigation = () => {
  const navLinks = [
    { name: 'Featured', href: '#featured' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="flex space-x-8"> {/* Adjust spacing as needed */}
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="font-roboto font-medium text-sm text-black hover:text-gray-600 transition-colors duration-200"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;