// ./src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-200 z-50" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="font-bold text-xl">Krish Patel</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out">About</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out">Contact</a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col items-center">
            <a href="#about" className="block px-4 py-2 hover:text-purple-600" onClick={handleMenuItemClick}>About</a>
            <a href="#projects" className="block px-4 py-2 hover:text-purple-600" onClick={handleMenuItemClick}>Projects</a>
            <a href="#skills" className="block px-4 py-2 hover:text-purple-600" onClick={handleMenuItemClick}>Skills</a>
            <a href="#contact" className="block px-4 py-2 hover:text-purple-600" onClick={handleMenuItemClick}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
