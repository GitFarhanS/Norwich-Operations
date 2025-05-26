// Media.jsx
import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

// Media data array
const mediaItems = [
  {
    type: "facebook",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNNUH.nhs%2Fposts%2Fpfbid0LyJeoJeP8GM3GwyKJWWGeWeJGVYvuqEVWid5Faqp5QvAzGiVYdG1sEC9Hcdt2jE5l&show_text=true&width=500",
    title: "Facebook Post",
    minHeightDesktop: 500,
    minHeightMobile: 500,
  },
  {
    type: "instagram",
    src: "https://www.instagram.com/p/C0OWKtBoZN-/embed",
    title: "Instagram Post",
    minHeightDesktop: 900,
    minHeightMobile: 550,
  },
  {
    type: "instagram",
    src: "https://www.instagram.com/p/DKABiCuxmhu/embed",
    title: "Instagram Post",
    minHeightDesktop: 900,
    minHeightMobile: 465,
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/Xq9i7lXPwQI?start=102&end=113",
    title: "YouTube Clip",
    aspect: "16/9",
    minHeightDesktop: 500,
    minHeightMobile: 200,
  },
];

function getMinHeight(item, deviceWidth) {
    if (deviceWidth < 768 ) {
      return item.minHeightMobile || 200;
    } else {
      return item.minHeightDesktop || 400;
    }
  }
  

// Media card component
function MediaCard({ item, motionProps, minHeight }) {
  return (
    <motion.div
      className="break-inside-avoid rounded-xl overflow-hidden shadow-lg mb-6"
      style={{ minHeight: minHeight }}
      {...motionProps}
    >
      <iframe
        src={item.src}
        title={item.title}
        frameBorder="0"
        allow={
          item.type === "youtube"
            ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            : item.type === "facebook"
            ? "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            : "encrypted-media"
        }
        allowFullScreen
        scrolling={item.type === "facebook" ? "no" : undefined}
        allowtransparency={item.type === "instagram" ? "true" : undefined}
        className="w-full h-full"
        style={{
          aspectRatio: item.aspect || undefined,
          minHeight: minHeight,
          border: item.type === "facebook" ? "none" : undefined,
          overflow: item.type === "facebook" ? "hidden" : undefined,
        }}
      ></iframe>
    </motion.div>
  );
}

// Masonry breakpoints
const breakpointColumnsObj = {
  default: 2,
  768: 1,
};

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Media layout component
export default function Media() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-extrabold text-blue-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Media
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex -ml-6 w-auto"
            columnClassName="pl-6 space-y-6"
          >
            {mediaItems.map((item, idx) => (
              <MediaCard
                key={idx}
                item={item}
                minHeight={getMinHeight(item, window.innerWidth)}
                motionProps={{ variants: cardVariants }}
              />
            ))}
          </Masonry>
        </motion.div>
      </div>
    </div>
  );
}
