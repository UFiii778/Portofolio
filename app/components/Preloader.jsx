'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulasi perhitungan loading 0% sampai 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400); // Penundaan singkat sebelum layar terangkat
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Kecepatan counter (semakin kecil nilainya, semakin cepat)

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Kurva transisi smooth
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-white p-8 md:p-12 select-none"
    >
      {/* Header Preloader */}
      <div className="flex justify-between items-center text-xs md:text-sm uppercase tracking-widest text-neutral-400">
        <span>Creative Studio</span>
        <span>Amsterdam / ID</span>
      </div>

      {/* Brand / Logo Center */}
      <div className="text-center overflow-hidden">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-8xl font-black tracking-tighter uppercase"
        >
          REKORDER
        </motion.h1>
      </div>

      {/* Counter Progress */}
      <div className="flex justify-between items-end border-t border-neutral-800 pt-4">
        <span className="text-xs text-neutral-500 font-mono">LOADING EXPERIENCE</span>
        <span className="text-6xl md:text-9xl font-mono font-light tracking-tighter">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
}