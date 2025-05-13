// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-800">
        Prof. Irshad Shaikh
      </Link>
      <div className="space-x-6">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        <Link to="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
        <Link to="/featured" className="text-gray-600 hover:text-blue-600">Featured</Link>
      </div>
    </nav>
  );
}
