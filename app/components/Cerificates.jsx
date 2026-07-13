"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Pastikan memakai framer-motion yang serasi dengan komponen lain

const Certificates = () => {
    // Data sertifikat kamu
    // Silakan sesuaikan nama properti asetnya (misal: assets.cert_revou, assets.cert_dicoding, dst.) di file assets.js kamu
    const certificateList = [
        {
            title: "RevoU Certificate",
            description: "Software Engineering Program",
            imageSrc: assets.cert_revou || assets.user_image, // Fallback ke user_image jika belum di-import
            link: "#"
        },
        {
            title: "Dicoding Certificate",
            description: "Build App with React",
            imageSrc: assets.cert_react || assets.user_image,
            link: "#"
        },
        {
            title: "Another Certificate",
            description: "Professional Certification",
            imageSrc: assets.cert_full || assets.user_image,
            link: "#"
        }
    ];

    return (
        <div id="certificates" className="w-full px-[12%] py-16 scroll-mt-20">
            {/* Heading Section */}
            <h4 className="text-center mb-2 text-lg font-Ovo">Achievements</h4>
            <h2 className="text-center text-5xl font-Ovo mb-4">Certificate</h2>

            <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center mb-12 shadow-sm">
                <h3 className="text-2xl font-semibold font-Ovo text-gray-800 mb-3">
                    I am a student at SMK ICB who participated in the Coding Camp program.
                </h3>
                <p className="text-gray-600 font-Ovo leading-relaxed max-w-2xl mx-auto">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit amet totam maxime?
                </p>
            </div>

            {/* Grid Kartu Sertifikat */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {certificateList.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden p-4 flex flex-col justify-between shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 duration-300"
                    >
                        <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden relative mb-4 border border-gray-100 flex items-center justify-center">
                            <Image
                                src={cert.imageSrc}
                                alt={cert.title}
                                className="w-full h-full object-cover hover:scale-105 duration-500"
                                placeholder="blur"
                                blurDataURL={assets.header_bg_color?.src} // Efek loading smooth
                            />
                        </div>

                        <div className="text-center mt-2">
                            <h3 className="font-semibold text-gray-800 text-lg font-Ovo">
                                {cert.title}
                            </h3>
                            <p className="text-gray-500 text-sm font-Ovo mt-1">
                                {cert.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;