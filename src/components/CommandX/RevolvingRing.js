// RevolvingRing.js
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const RevolvingRing = ({ size = 400, color = '#3A86FF', opacity = 0.1 }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        zIndex: 0,
      }}
    >
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: `2px solid ${color}`,
            borderRadius: '50%',
            opacity: opacity,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [
              '0%', '20%', '40%', '60%', '80%', '100%',
              '80%', '60%', '40%', '20%', '0%', '-20%',
              '-40%', '-60%', '-80%', '-100%',
              '-80%', '-60%', '-40%', '-20%', '0%'
            ],
            y: [
              '0%', '-20%', '-40%', '-60%', '-80%', '-100%',
              '-80%', '-60%', '-40%', '-20%', '0%', '20%',
              '40%', '60%', '80%', '100%',
              '80%', '60%', '40%', '20%', '0%'
            ],
          }}
          transition={{
            duration: 30 + index * 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2,
          }}
        />
      ))}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`inner-${index}`}
          style={{
            position: 'absolute',
            top: '25%',
            left: '25%',
            right: '25%',
            bottom: '25%',
            border: `2px solid ${color}`,
            borderRadius: '50%',
            opacity: opacity,
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
            x: [
              '0%', '-20%', '-40%', '-60%', '-80%', '-100%',
              '-80%', '-60%', '-40%', '-20%', '0%', '20%',
              '40%', '60%', '80%', '100%',
              '80%', '60%', '40%', '20%', '0%'
            ],
            y: [
              '0%', '20%', '40%', '60%', '80%', '100%',
              '80%', '60%', '40%', '20%', '0%', '-20%',
              '-40%', '-60%', '-80%', '-100%',
              '-80%', '-60%', '-40%', '-20%', '0%'
            ],
          }}
          transition={{
            duration: 25 + index * 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2,
          }}
        />
      ))}
    </Box>
  );
};

export default RevolvingRing;