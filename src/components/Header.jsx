import React from 'react';
import logofinacle2 from '../assets/logofinacle2.svg';

const Header = () => (
  <header className="flex justify-between items-center p-6 bg-white shadow-md">
    {/* Logo on the left */}
    <div className="flex items-center">
      <img
        src={logofinacle2}
        alt="MAS Icon"
        className="h-5 w-auto mr-4" // Adjusted size
      />
      <span className="text-lg font-bold">FINACLE</span> {/* Optional text next to the logo */}
    </div>

    {/* Navigation items on the right */}
    <nav>
      <ul className="flex space-x-6">
        <li className="hover:text-gray-600 cursor-pointer">Our Services</li>
        <li className="hover:text-gray-600 cursor-pointer">E-Learnings</li>
        <li className="hover:text-gray-600 cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  </header>
);

export default Header;
