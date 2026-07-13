"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import CircularGallery from "./reactbits/CircularGallery";
import { motion } from "motion/react"
import { BsInstagram } from "react-icons/bs";
import ScrollReveal from "./reactbits/ScrollReveal";

const Gallery = () => {
    return (
        <div id="social" className="w-11/12 max-w-5xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 py-20">

            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-3 font-Ovo font-medium text-black">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="inline-block min-w-[150px] text-3xl sm:text-6xl lg:text-[46px] text-left">Beyond the Code
                </motion.span>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}>
                When I'm not staring at a code editor, I'm out capturing moments and exploring life. Here’s a glimpse of my world.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a href="https://www.instagram.com/luthfiiizzz_?igsh=Nm4xdnE1dmg4aHZy" className="px-10 py-3 border border-white rounded-full bg-sky-800 text-white flex items-center gap-2">Connect on Instagram <BsInstagram className="w-4" /></a>
            </motion.div>

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

            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-3 font-Ovo font-medium text-black">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                >

                    When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                    No! When he ate a soup made out of a poisonous mushroom?
                    No! A man dies when he is forgotten!

                </ScrollReveal>
            </div>

        </div>
    )
}

export default Gallery;