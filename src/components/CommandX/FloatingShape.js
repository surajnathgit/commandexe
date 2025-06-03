// FloatingShape.js
import React from 'react';
import { motion } from 'framer-motion';

const FloatingShape = ({ size, color, top, left, right, bottom, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3],
        scale: [0.8, 1, 0.8],
        x: [0, 15, 0],
        y: [0, -15, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      style={{
        position: 'absolute',
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
        zIndex: 0,
      }}
    />
  );
};

export default FloatingShape;