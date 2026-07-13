"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"
import RotatingText from "./reactbits/RotatingText";
import Aurora from "./reactbits/Aurora";
import { Contact2Icon, Sliders } from "lucide-react";

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">

            <div className="absolute inset-0 pointer-events-none z-0 opacity-35">
                <Aurora
                    colorStops={["#0ea5e9", "#6366f1", "#a855f7"]} 
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.6}
                />
            </div>

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
                    mainClassName="px-2 sm:px-2 md:px-3 bg-gray-700 text-sky-300 overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg inline-flex"
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
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}>
                Building functional, interactive, and user-centric web applications
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-sky-400 text-white flex items-center gap-2">Contact me <Contact2Icon className="w-4" /></a>
            </motion.div>
        </div>
    )
}

export default Header