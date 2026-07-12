"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import CircularGallery from "./reactbits/CircularGallery";
import RotatingText from "./reactbits/RotatingText";
import { motion } from "motion/react"

const Gallery = () => {
    return (
        <div id="gallery" className="w-11/12 max-w-5xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 py-20">

            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-3 font-Ovo font-medium text-black">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="inline-block min-w-[150px] text-3xl sm:text-6xl lg:text-[46px] text-left">Hi I'm
                    <RotatingText
                        texts={['Luthfi!', 'Kurao!']}
                        mainClassName="px-2 sm:px-3 bg-sky-400 text-white overflow-hidden py-1 justify-center rounded-lg inline-flex"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                    />
                </motion.span>
            </div>

            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 1.3 }} className="text-3xl sm:text-6xl lg:text-[55px] font-Ovo">
                Full Stack Web Developer & Drone's Pilot based in
                <RotatingText
                    texts={['Indonesia', 'Singapore']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-gray-700 text-sky-300 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                    splitBy="characters"
                    auto
                    loop
                />
            </motion.h1>
            <p>
                Building functional, interactive, and user-centric web applications
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-sky-800 text-white flex items-center gap-2">Contact me <Image src={assets.right_arrow_white} alt="" className="w-4" /></a>
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