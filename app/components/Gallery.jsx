"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BsInstagram } from "react-icons/bs";
import ScrollReveal from "./reactbits/ScrollReveal";
import CircularGallery from "./reactbits/CircularGallery";

const GALLERY_ITEMS = [
    { image: assets.Neo?.src || assets.Neo, text: 'Drone Shoot' },
    { image: assets.Rider?.src || assets.Rider, text: 'Rider Era!' },
    { image: assets.MineCraft?.src || assets.MineCraft, text: 'Player too' },
    { image: assets.CameraMan?.src || assets.CameraMan, text: 'Event' },
    { image: assets.Where?.src || assets.Where, text: 'Shall we?' }
];

const Gallery = () => {
    // 1. State untuk mendeteksi apakah sedang mode dark atau light
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        checkDarkMode();

        // Amati perubahan class pada <html> saat tombol theme toggler diklik
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div id="social" className="w-full px-[12%] py-16 scroll-mt-20 text-center mx-auto flex flex-col items-center justify-center gap-6 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-3 font-Ovo font-medium text-black">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="inline-block min-w-[150px] text-3xl sm:text-6xl lg:text-[46px] text-left text-black dark:text-slate-50">Beyond the Code
                </motion.span>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="text-gray-600 dark:text-gray-300 font-Ovo"
            >
                When I'm not staring at a code editor, I'm out capturing moments and exploring life. Here’s a glimpse of my world.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a href="https://www.instagram.com/luthfiiizzz_?igsh=Nm4xdnE1dmg4aHZy"
                    className="px-10 py-3 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2 text-2xl">
                    luthfiiizzz_ <BsInstagram className="w-7 h-7" />
                </a>
            </motion.div>

            <div style={{ width: '100%', height: '560px', position: 'relative' }}>
                <CircularGallery
                    items={GALLERY_ITEMS}
                    bend={-2}
                    textColor={isDarkMode ? "#ffffff" : "#000000"}
                    borderRadius={0.05}
                    scrollEase={0.05}
                    onItemClick={(item, index) => console.log(item.text, index)}
                    itemSize={1}
                    itemAspect={0.76}
                    gap={0.26}
                    wave={1}
                    fadeEdges={0.12}
                    shadow={0.25}
                    scrollSpeed={1.7}
                    autoScroll={0}
                    snap
                    grayscale={false}
                    showTitles
                    openOnClick
                    intro
                />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-3 mt-5 font-Ovo font-medium text-black dark:text-slate-50">
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
    );
};

export default Gallery;