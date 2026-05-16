import { motion } from "framer-motion";
import React from "react";

interface FadeUpImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const FadeUpImage: React.FC<FadeUpImageProps> = ({
  src,
  alt,
  className = "",
  delay = 0,
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{
          opacity: 0,
          y: 80,
          scale: 1.08,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.08,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FadeUpImage;
