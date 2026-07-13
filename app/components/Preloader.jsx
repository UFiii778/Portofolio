"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulasi loading progress bar dari 0% sampai 100%
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Beri jeda sedikit setelah 100% sebelum menutup preloader
          setTimeout(onComplete, 400);
          return 100;
        }
        // Naik acak biar kelihatan natural proses loadingnya
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      // Efek slide up halus ke atas saat selesai loading
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
    >
      <div className="w-[250px] sm:w-[350px] flex flex-col gap-4">
        {/* Angka Persentase */}
        <div className="flex justify-between items-end font-Ovo">
          <span className="text-sm text-gray-400 tracking-wider">Loading</span>
          <span className="text-2xl font-bold text-sky-400">{Math.min(progress, 100)}%</span>
        </div>

        {/* Jalur Loading Bar */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
          {/* Progress Bar yang Jalan */}
          <motion.div 
            className="h-full bg-gradient-to-r from-sky-400 to-white rounded-full"
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;