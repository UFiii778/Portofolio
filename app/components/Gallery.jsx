"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import CircularGallery from "./reactbits/CircularGallery";
import { motion } from "motion/react"
import { ImInstagram } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Gallery = () => {
    return (
        <div className="w-11/12 max-w-5xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 py-20">

            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-3 font-Ovo font-medium text-black">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="inline-block min-w-[150px] text-3xl sm:text-6xl lg:text-[46px] text-left">Look My Random Picture
                </motion.span>
            </div>

            <p>
                Building functional, interactive, and user-centric web applications
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-sky-800 text-white flex items-center gap-2">Follow My Instagram <BsInstagram className="w-4"/></a>
      </div>

      <div className="w-full max-w-4xl h-[500px] md:h-[600px] relative flex items-center justify-center mt-4 overflow-hidden">
          <div className="w-full h-full absolute inset-0">
              <CircularGallery
                  bend={0} 
                  textColor="#000000"
                  borderRadius={0.05}
                  scrollEase={0.05}
                  fontUrl="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
                  font="bold 30px Orbitron"
                  scrollSpeed={2}
              />
          </div>
      </div>

  </div>
)
}

export default Gallery;