import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
  {
    label: "Bupa Consultant Profile",
    url: "https://www.finder.bupa.co.uk/Consultant/view/204746/professor_irshad_a_a_k_shaikh",
  },
  {
    label: "Spire Healthcare Profile",
    url: "https://www.spirehealthcare.com/consultant-profiles/mr-irshad-shaikh-c6067782/#!#cobpsCalendarAnchor",
  },
  {
    label: "NNUH NHS Profile",
    url: "https://www.nnuh.nhs.uk/people/irshad-a-shaikh/",
  },
  {
    label: "The Gut Clinic UK Profile",
    url: "https://thegutclinicuk.com/specialist/irshad-shaikh/",
  },
  {
    label: "ResearchGate Profile",
    url: "https://www.researchgate.net/profile/Irshad-Ahammed-Shaikh",
  },
];

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

export default function Links() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-extrabold text-blue-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Useful Links
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border rounded-xl shadow hover:shadow-lg transition bg-white px-6 py-4 text-blue-800 hover:text-blue-900 text-lg font-medium group"
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(30, 64, 175, 0.15)" }}
            >
              <span>{link.label}</span>
              <FiExternalLink className="ml-3 w-5 h-5 opacity-70 group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 