"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RotatingText from "./reactbits/RotatingText";
import { ArrowDownRight, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { assets } from "@/assets/assets";
import GradientASCII from "./reactbits/GradientASCII";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        checkDarkMode();

        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const lightColors = ["#0284c7", "#e0f2fe", "#38bdf8", "#0369a1"];
    const darkColors = ["#0284c7", "#FFFFFF", "#1161A6", "#00D0FF"];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
            <div className="absolute inset-0 z-0">
                <GradientASCII
                    lightMode={!isDarkMode}
                    colors={isDarkMode ? darkColors : lightColors}
                    shape="horizon"
                    cellSize={16}
                    density={0.5}
                    glyphOpacity={0.85}
                    glow={isDarkMode ? 0.4 : 0.1}
                    softness={0.6}
                    speed={0.8}
                    gradientOpacity={isDarkMode ? 0.8 : 0.6}
                    grain={0.05}
                    mouseInteraction={true}
                    clickEffect="wave"
                    intro
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
                <div className="mb-2 flex justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-xl bg-white dark:bg-neutral-800 shrink-0">
                        <Image
                            src={assets.profile || "https://picsum.photos/200"}
                            alt="Profile"
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-1 font-Ovo font-medium">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="inline-block min-w-[150px] text-3xl sm:text-6xl lg:text-[46px] text-left text-neutral-900 dark:text-white"
                    >
                        Hi I'm{" "}
                        <RotatingText
                            texts={["Luthfi!", "Kurao!"]}
                            mainClassName="px-2 sm:px-3 bg-neutral-500 dark:bg-sky-600 text-white overflow-hidden py-1 justify-center rounded-lg inline-flex shadow-sm"
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
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="text-2xl sm:text-4xl lg:text-[44px] font-Ovo leading-tight text-gray-800 dark:text-gray-100"
                >
                    Full Stack Web Developer & Drone's Pilot based in{" "}
                    <RotatingText
                        texts={["Indonesia", "Singapore"]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-neutral-900 dark:text-sky-400 overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg inline-flex border border-gray-200 dark:border-slate-700 shadow-sm"
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                    className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                >
                    <a
                        href="#work"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 px-7 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700/60 shadow-lg shadow-sky-500/10 dark:shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/30 dark:hover:shadow-sky-500/40 active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View My Work
                            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-grey-600 to-sky-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>

                    <a
                        href="#contact"
                        className="group relative inline-flex h-12 items-center justify-center rounded-full border border-neutral-300/80 bg-white/70 px-7 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-md active:scale-95 dark:border-white/15 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-sky-400 dark:hover:bg-neutral-900"
                    >
                        <span className="flex items-center gap-2">
                            Get in Touch
                            <Mail className="h-4 w-4 text-sky-500 transition-transform duration-300 group-hover:scale-110 dark:text-sky-400" />
                        </span>
                    </a>

                    <a
                        href="https://github.com/UFiii778"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300/80 bg-white/70 text-neutral-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-neutral-900 hover:text-white hover:shadow-md active:scale-95 dark:border-white/15 dark:bg-neutral-900/60 dark:text-neutral-300  dark:hover:bg-white dark:hover:text-neutral-900"
                    >
                        <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Header;