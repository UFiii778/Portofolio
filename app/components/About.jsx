"use client";

import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import ScrollVelocity from "./reactbits/ScrollVelocity";
import LogoLoop from "./reactbits/LogoLoop";
import Lanyard from "./reactbits/Lanyard";

import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiSupabase,
    SiDji,
    SiLaravel,
    SiGooglegemini,
    SiAndroidstudio,
    SiAnthropic
} from 'react-icons/si';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
    { node: <SiDji />, title: "Dji", href: "https://dji.com" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiGooglegemini />, title: "Gemini", href: "https://gemini.google.com" },
    { node: <SiAndroidstudio />, title: "Android Studio", href: "https://android.com" },
    { node: <SiAnthropic />, title: "Antropic", href: "https://anthropic.com" }
];

const About = () => {
    return (
        <div id="about" className="w-full px-[8%] sm:px-[12%] py-10 scroll-mt-20 bg-neutral-50 dark:bg-neutral-950">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>

            <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-16">
                
                {/* Container Lanyard dengan Border & Responsive Height/Width */}
                <div className="relative w-full max-w-sm lg:max-w-md h-[420px] sm:h-[500px] lg:h-[550px] rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md shadow-xl overflow-hidden flex items-center justify-center p-2">
                    <Lanyard 
                        frontImage={assets.Me45?.src || assets.Me45} 
                        backImage={assets.MineCraft?.src || assets.MineCraft} 
                        strapImage="/band.png"
                        imageFit="cover"
                        cardColor="#ffffff"
                        orientation="portrait"
                        finish="glossy"
                        cornerRadius={0.3}
                        size={0.6}
                        anchor="center"
                        strapLength={0.5}
                        strapColor="#111111"
                        strapWidth={0.65}
                        metal="silver"
                        gravity={1}
                        damping={0.5}
                        elasticity={0.5}
                        breeze={0.5}
                        interactive
                    />
                </div>

                {/* Deskripsi Teks */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 max-w-2xl text-3xl sm:text-5xl font-Ovo leading-tight"
                    >
                        I Am <span className="px-2 sm:px-3 my-1 bg-sky-400 text-white rounded-lg inline-flex">Luthfi Abdillah</span>
                    </motion.h2>
                    <p className="mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        I am a Software Engineering student based in Bandung. As an aspiring developer, I am deeply passionate about continuous learning and sharpening my skills. My ultimate goal is to grow into a world-class engineer and contribute to impactful tech companies in the future.
                    </p>
                </div>
            </div>

            <h4 className="text-3xl sm:text-6xl lg:text-[46px] text-center mt-5 font-Ovo">Tools I Use</h4>

            <div className="mt-12" style={{ width: '100%', height: '160px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="left"
                    logoHeight={50}
                    gap={50}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    ariaLabel="Technology partners"
                />
            </div>

            <ScrollVelocity
                texts={['@luthfiiizzz_', '@unsc.uk']}
                velocity={100}
                className="custom-scroll-text"
                numCopies={6}
                damping={50}
                stiffness={400}
            />
        </div>
    );
};

export default About;