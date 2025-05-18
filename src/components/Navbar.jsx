// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/ftlogo.png`}
            alt="Professor Irshad Shaikh"
            className="h-10 w-auto hidden md:block"
          />
          <span className="text-lg font-bold text-gray-800 ml-2 hidden md:block">Prof. Irshad Shaikh</span>
        </div>
        <div className="flex space-x-4 md:space-x-6 text-sm md:text-base">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          <Link to="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
          <Link to="/featured" className="text-gray-600 hover:text-blue-600">Featured</Link>
        </div>
      </div>
    </nav>
  );
}
