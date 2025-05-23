import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}testimonials.json`)
      .then((res) => res.json())
      .then(setTestimonials)
      .catch(error => console.error('Error loading testimonials:', error));
  }, []);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Truncated dot logic
  const maxVisibleDots = 5;
  let start = Math.max(0, currentPage - Math.floor(maxVisibleDots / 2));
  let end = Math.min(totalPages, start + maxVisibleDots);
  if (end - start < maxVisibleDots) {
    start = Math.max(0, end - maxVisibleDots);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Patient Testimonials
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Hear what our patients have to say about their experience
        </p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8"
            >
              {currentTestimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex gap-2 text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                      <p className="text-lg italic text-gray-700">
                        "{t["Review Text"]}"
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{t.Date}</span>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1">
                        🤝 {t["Trust Stars"]}
                      </span>
                      <span className="flex items-center gap-1">
                        👂 {t["Listening Stars"]}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="w-full flex justify-center mt-10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevPage}
                className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-950 transition-colors"
              >
                Previous
              </motion.button>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: end - start }, (_, i) => start + i).map((i) => (
                    <div key={i} className="relative group">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentPage(i)}
                        className={`w-3 h-3 rounded-full transition ${
                        currentPage === i ? "bg-blue-900" : "bg-blue-300"
                        }`}
                    />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs px-2 py-1 rounded">
                        Page {i + 1}
                    </div>
                    </div>
                ))}
                </div>


              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextPage}
                className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-950 transition-colors"
              >
                Next
              </motion.button>
            </div>
          </div>
        </div>

        {/* iWantGreatCare Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">All testimonials are sourced from</p>
          <a 
            href="https://www.iwantgreatcare.org/doctors/professor-irshad-shaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-500 !text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Read more patient reviews for Professor Irshad Shaikh on iWantGreatCare
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
