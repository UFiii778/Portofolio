"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; 

const Certificates = () => {

    const [selectedCert, setSelectedCert] = useState(null);


    const certificateList = [
        {
            title: "RevoU Certificate",
            description: "Software Engineering Program",
            imageSrc: assets.cert_revou || assets.user_image,
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

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}>
                <h4 className="text-center mb-2 text-lg font-Ovo">Achievements</h4>
                <h2 className="text-center text-5xl font-Ovo">My Certificates</h2>
                <p className="text-center text-gray-500 max-w-xl mx-auto mt-4 font-Ovo">
                    Professional certifications and training programs I have completed to validate my expertise in software development.
                </p>
            </motion.div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {certificateList.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedCert(cert)}
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden p-4 flex flex-col justify-between shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 duration-300 select-none"
                    >
                        <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden relative mb-4 border border-gray-100 flex items-center justify-center">
                            <Image
                                src={cert.imageSrc}
                                alt={cert.title}
                                className="w-full h-full object-cover hover:scale-105 duration-500"
                                placeholder="blur"
                                blurDataURL={assets.header_bg_color?.src}
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


            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    >

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}

                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-[#130f35]/40 border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col"
                        >

                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-12 right-0 sm:right-[-10px] sm:-top-12 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all duration-200 group border border-white/10 focus:outline-none"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 duration-300" />
                            </button>


                            <div className="w-full overflow-hidden rounded-xl bg-gray-900 aspect-[4/3] relative">
                                <Image
                                    src={selectedCert.imageSrc}
                                    alt={selectedCert.title}
                                    fill
                                    sizes="(max-w-1024px) 100vw, 850px"
                                    className="object-contain"
                                    priority
                                />
                            </div>


                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold text-white font-Ovo">
                                    {selectedCert.title}
                                </h3>
                                <p className="text-gray-400 text-sm font-Ovo mt-1">
                                    {selectedCert.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certificates;