import { motion } from "framer-motion";

export default function Treatments() {
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
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Treatment Information</h1>
          <p className="text-xl text-blue-700">
            Principal treatments carried out by Prof Irshad Shaikh at Spire
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* General Surgery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">General Surgery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Bowel surgery, colostomy and ileostomy",
                "Colonoscopy",
                "Flexible sigmoidoscopy",
                "Haemorrhoids removal treatment",
                "Hernia surgery",
                "Laparoscopy investigation and treatment",
                "Surgery for anal fissure",
                "Surgery for anal fistula",
                "Surgery for anal warts"
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{treatment}</p>
                    <p className="text-sm text-gray-600">Spire Norwich Hospital, Spire Ella May Barnes Clinic</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Treatments Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-semibold text-blue-800 mb-6">Other Treatments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Anal and colorectal cancer",
                "Banding/injection of haemorrhoids",
                "Coloproctology",
                "Colorectal surgery",
                "Endoscopy",
                "General surgery",
                "Haemorrhoid surgery including HALO treatment",
                "Minimal access",
                "Rectal prolapse surgery",
                "Treatment of locally advanced cancer"
              ].map((treatment, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium">{treatment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 