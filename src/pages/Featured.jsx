import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Featured() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}featured.json`)
      .then((res) => res.json())
      .then(setArticles)
      .catch(error => console.error('Error loading featured content:', error));
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-extrabold text-blue-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Articles
        </motion.h2>
        <motion.div
          className="grid gap-10 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {articles.map((a, index) => (
            <motion.a
              key={index}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden bg-white"
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(30, 64, 175, 0.15)" }}
            >
              <img 
                src={a.image} 
                alt={a.title} 
                className="w-full h-64 object-cover object-[center_30%] transform hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{a.title}</h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
