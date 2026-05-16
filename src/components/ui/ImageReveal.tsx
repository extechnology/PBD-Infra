import { motion } from "framer-motion";
import React from "react";

interface CurtainRevealProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const CurtainReveal: React.FC<CurtainRevealProps> = ({
  src,
  alt,
  className = "",
  delay = 0,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Image Container */}
      <motion.div
        initial={{
          clipPath: "inset(0 50% 0 0)",
          x: "-8%",
          scale: 1.08,
        }}
        whileInView={{
          clipPath: "inset(0 0% 0 0)",
          x: "0%",
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.03,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className="w-full h-full"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>

      {/* Soft cinematic glow */}
      <motion.div
        initial={{
          opacity: 0.6,
          x: "-100%",
        }}
        whileInView={{
          opacity: 0,
          x: "120%",
        }}
        viewport={{
          once: false,
          amount: 0.35,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-white/20 via-white/10 to-transparent"
      />
    </div>
  );
};

export default CurtainReveal;
