// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-6xl font-extrabold text-blue-900 mb-6">
            Professor Irshad Shaikh
          </h1>
          <p className="text-xl text-blue-700 mb-8">
            Consultant in Robotic & Laparoscopic Colorectal Surgery
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/dr-shaikh-speaking.jpeg`}
              alt="Professor Irshad Shaikh"
              className="w-full h-64 object-cover object-top transform hover:scale-105 transition-transform duration-500"/>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/dr-shaikh.jpg`}
              alt="Dr. Shaikh with Surgical Robot"
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/dr-shaikh-team.png`}
              alt="Dr. Shaikh's Team"
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Providing expert care in colorectal surgery with a focus on robotic and
            minimally invasive procedures. Proudly serving both NHS and private patients
            with cutting-edge technology and compassionate care.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            to="/about"
            className="bg-blue-600 !text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
