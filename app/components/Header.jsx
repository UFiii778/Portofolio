"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RotatingText from "./reactbits/RotatingText";
import { Contact2Icon } from "lucide-react";
import { assets } from "@/assets/assets";
import GradientASCII from "./reactbits/GradientASCII";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        checkDarkMode();

        // Amati perubahan class pada <html> untuk perubahan tema langsung
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const lightColors = ["#0284c7", "#e0f2fe", "#38bdf8", "#0369a1"];
    const darkColors = ["#0284c7", "#0f172a", "#1e293b", "#0284c7"];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
            {/* Background ASCII Gradient */}
            <div className="absolute inset-0 z-0">
                <GradientASCII
                    lightMode={!isDarkMode}
                    colors={isDarkMode ? darkColors : lightColors}
                    shape="horizon"
                    cellSize={16}
                    density={0.75}
                    glyphOpacity={0.7}
                    glow={isDarkMode ? 0.4 : 0.1}
                    softness={0.6}
                    speed={0.8}
                    gradientOpacity={isDarkMode ? 0.8 : 0.6}
                    grain={0.05}
                    mouseInteraction={true}
                    clickEffect="wave"
                />
            </div>

            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative z-10 w-11/12 max-w-3xl mx-auto h-full flex flex-col gap-4 text-center items-center justify-center px-4"
            >
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md">
                        <Image
                            src={assets.profile || "https://picsum.photos/200"}
                            alt="Profile"
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-2 font-Ovo font-medium">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate ={{ opacity: 1, y: 0}}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                        className="inline-block min-w-[150px] text-3xl sm:text-6xl lg:text-[46px] text-left text-neutral-900 dark:text-white"
                    >
                        Hi I'm{" "}
                        <RotatingText
                            texts={["Luthfi!", "Kurao!"]}
                            mainClassName="px-2 sm:px-3 bg-sky-500 dark:bg-sky-600 text-white overflow-hidden py-1 justify-center rounded-lg inline-flex shadow-sm"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.02}
                            splitLevelClassName="overflow-hidden"
                            transition={{ type: "tween", duration: 0.25 }}
                            rotationInterval={3500}
                        />
                    </motion.span>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="text-3xl sm:text-5xl lg:text-[52px] font-Ovo leading-tight text-gray-800 dark:text-gray-100"
                >
                    Full Stack Web Developer & Drone's Pilot based in{" "}
                    <RotatingText
                        texts={["Indonesia", "Singapore"]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-sky-600 dark:text-sky-400 overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg inline-flex border border-gray-200 dark:border-slate-700 shadow-sm"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.02}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                        transition={{ type: "tween", duration: 0.25 }}
                        rotationInterval={3000}
                        splitBy="characters"
                        auto
                        loop
                    />
                </motion.h1>

                {/* Subtitle Deskripsi */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-xl font-Ovo"
                >
                    Building functional, interactive, and user-centric web applications
                </motion.p>

                {/* Tombol CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-2"
                >
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-white flex items-center gap-2 shadow-md hover:shadow-sky-500/25 transition-all duration-200 font-medium active:scale-95"
                    >
                        Contact me <Contact2Icon className="w-4 h-4" />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Header;