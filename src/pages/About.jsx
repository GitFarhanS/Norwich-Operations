// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-5xl font-bold text-blue-900 mb-6">About Professor Shaikh</h1>
          <p className="text-xl text-blue-700">
            Leading the way in robotic and laparoscopic colorectal surgery
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Experience & Expertise</h2>
              <p className="text-gray-700 mb-4">
                Professor Irshad Shaikh is a Consultant Colorectal Surgeon at Norfolk and
                Norwich University Hospital and Spire Norwich Hospital. With over two
                decades of experience, he specializes in robotic and laparoscopic
                colorectal surgery.
              </p>
              <p className="text-gray-700 mb-4">
                He is the Lead for Robotic Colorectal Surgery and holds a teaching
                position at the University of East Anglia. His clinical interests include
                advanced rectal cancer surgery, anal cancer, inflammatory bowel disease,
                and complex hernia repairs.
              </p>
              <p className="text-gray-700">
                Professor Shaikh has received national recognition, including the HSJ
                Award in 2019 and a National Clinical Excellence Award in 2022.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src="/images/dr-shaikh-with-robot.webp"
                alt="Dr. Shaikh with Surgical Robot"
                className="w-full h-64 object-cover object-[center_30%]"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src="/images/dr-shaikh-speaking.jpeg"
                alt="Dr. Shaikh Speaking"
                className="w-full h-64 object-cover object-[center_30%]"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src="/images/dr-shaikh-team.png"
                alt="Dr. Shaikh's Team"
                className="w-full h-64 object-cover object-[center_30%]"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src="/images/dr-shaikh-surgery.png"
                alt="Surgical Procedure"
                className="w-full h-64 object-cover object-[center_30%]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Specialized in robotic and laparoscopic colorectal surgery
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Recognition</h3>
              <p className="text-gray-600">
                HSJ Award 2019 & National Clinical Excellence Award 2022
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Teaching</h3>
              <p className="text-gray-600">
                Teaching position at University of East Anglia
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
  