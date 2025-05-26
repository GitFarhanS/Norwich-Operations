// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}images/norwich-operations-logo-top.png`}
              alt="Norwich Operations Logo"
              className="h-12 w-auto"
            />
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-700 hover:text-blue-900">Home</Link>
            <Link to="/about" className="text-blue-700 hover:text-blue-900">About</Link>
            <Link to="/treatments" className="text-blue-700 hover:text-blue-900">Treatments</Link>
            <Link to="/testimonials" className="text-blue-700 hover:text-blue-900">Testimonials</Link>
            <Link to="/featured" className="text-blue-700 hover:text-blue-900">Featured</Link>
            <Link to="/links" className="text-blue-700 hover:text-blue-900">Links</Link>
            <Link to="/media" className="text-blue-700 hover:text-blue-900">Media</Link>
            <Link to="/contact" className="text-blue-700 hover:text-blue-900">Contact</Link>
          </div>
          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon */}
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block text-blue-700 py-2 px-4 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="block text-blue-700 py-2 px-4 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/treatments" className="block text-blue-700 py-2 px-4 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Treatments</Link>
              <Link to="/testimonials" className="block text-blue-700 py-2 px-4 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Testimonials</Link>
              <Link to="/featured" className="block text-blue-700 py-2 px-4 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Featured</Link>
              <Link to="/links" className="block text-blue-700 py-2 px-4 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Links</Link>
              <Link to="/media" className="block text-blue-700 py-2 px-4 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Media</Link>
              <Link to="/contact" className="block text-blue-700 py-2 px-4 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
      <main className="pt-16 bg-blue-50"> {/* Added padding-top for spacing and background color */}
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default Navbar;
