
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={images[currentIndex]}
            alt={`Customer logo ${currentIndex + 1}`}
            className="h-16 object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
