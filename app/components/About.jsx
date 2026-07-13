"use client";

import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"
import ScrollVelocity from "./reactbits/ScrollVelocity";
import LogoLoop from "./reactbits/LogoLoop";

import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
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
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
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
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.mainMe} alt="user" className="w-full rounded-3xl" />
                </div>
                <div className="flex-1">
                    <h2 className="mb-2 max-w-2xl text-5xl font-Ovo">
                        I Am <span className="px-2 sm:px-3 mb-3 max-w-2xl text-5xl bg-sky-400 text-white overflow-hidden py-1 justify-center rounded-lg inline-flex">Luthfi Abdillah</span>
                    </h2>
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am a Software Engineering student based in Bandung. As an aspiring developer, I am deeply passionate about continuous learning and sharpening my skills. My ultimate goal is to grow into a world-class engineer and contribute to impactful tech companies in the future.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map((info, index) => {
                            const IconComponent = info.icon;

                            return (
                                <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500" key={index}>

                                    <IconComponent className="w-7 h-7 mt-3 text-sky-500 dark:text-sky-400" />

                                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{info.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{info.description}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </motion.div>

            <h4 className="text-3xl sm:text-6xl lg:text-[46px] text-center mt-5">Tools I Use</h4>

            <div className="mt-20" style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                {/* Basic horizontal loop */}
                <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />

                {/* Vertical loop with deceleration on hover */}
                <LogoLoop
                    logos={techLogos}
                    useCustomRender={true}
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
