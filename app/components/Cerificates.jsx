"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isSpread, setIsSpread] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const certificateList = [
    {
      title: "CodingCamp By Dicoding",
      description: "I learn A lot about Fundamental & Financial",
      imageSrc: assets.cert_full || assets.user_image,
      position: "center",
    },
    {
      title: "Dicoding Certificate",
      description: "Build App with React",
      imageSrc: assets.cert_react || assets.user_image,
      position: "left",
    },
    {
      title: "RevoU Certificate",
      description: "Software Engineering Program",
      imageSrc: assets.cert_revou || assets.user_image,
      position: "right",
    },
  ];

  // Offset posisi untuk tampilan Desktop (sm & lg)
  const desktopPositions = {
    left: {
      x: "-85%",
      rotate: -8,
      scale: 0.88,
      zIndex: 1,
    },
    center: {
      x: "0%",
      rotate: 0,
      scale: 1,
      zIndex: 3,
    },
    right: {
      x: "85%",
      rotate: 8,
      scale: 0.88,
      zIndex: 2,
    },
  };

  const mobilePositions = {
    left: {
      x: "-42%",
      rotate: -6,
      scale: 0.82,
      zIndex: 1,
    },
    center: {
      x: "0%",
      rotate: 0,
      scale: 1,
      zIndex: 3,
    },
    right: {
      x: "42%",
      rotate: 6,
      scale: 0.82,
      zIndex: 2,
    },
  };

  const activePositions = isMobile ? mobilePositions : desktopPositions;

  return (
    <section
      id="certificates"
      className="w-full overflow-hidden bg-neutral-50 px-4 py-16 scroll-mt-20 dark:bg-neutral-950 sm:px-8 sm:py-20 lg:px-[12%]"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center"
      >
        <h2 className="font-Ovo text-3xl font-semibold text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
          My Certificates
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-Ovo text-xs leading-6 text-neutral-500 dark:text-neutral-400 sm:mt-5 sm:text-base sm:leading-7">
          Professional certifications and training programs I have completed
          to validate my expertise in software development.
        </p>
      </motion.div>

      {/* ANIMATED CARD STAGE */}
      <motion.div
        onViewportEnter={() => setIsSpread(true)}
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto mt-10 h-[360px] w-full max-w-[900px] sm:mt-16 sm:h-[460px] md:h-[490px]"
      >
        {certificateList.map((cert, index) => {
          const currentPos = activePositions[cert.position];

          return (
            <motion.button
              key={cert.title}
              type="button"
              initial={{
                x: "0%",
                y: 35,
                rotate: 0,
                scale: 0.75,
                opacity: 0,
              }}
              animate={
                isSpread
                  ? {
                      x: [
                        "0%",
                        index === 0
                          ? "-5%"
                          : index === 1
                          ? "-5%"
                          : "5%",
                        currentPos.x,
                      ],
                      y: 0,
                      rotate: currentPos.rotate,
                      scale: currentPos.scale,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.0,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: cert.position === "center" ? 1.03 : 0.88,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.25 },
              }}
              onClick={() => setSelectedCert(cert)}
              style={{
                left: "50%",
                top: "10px",
                transformOrigin: "50% 80%",
                zIndex: currentPos.zIndex,
              }}
              className={[
                "absolute left-1/2 -translate-x-1/2",
                "w-[240px] xs:w-[260px] sm:w-[290px]",
                "cursor-pointer overflow-hidden rounded-2xl border border-white/60",
                "bg-white text-left shadow-[0_15px_45px_rgba(0,0,0,0.1)]",
                "dark:border-white/10 dark:bg-[#181818]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
              ].join(" ")}
            >
              <div className="flex items-center justify-between px-3.5 pb-2 pt-3.5 sm:px-4 sm:pb-3 sm:pt-4">
                <span className="text-[10px] font-medium tracking-[0.18em] text-neutral-900 dark:text-neutral-50 sm:text-xs">
                  CERTIFICATE / 0{index + 1}
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-neutral-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-[17px]"
                />
              </div>

              <div className="relative mx-2.5 aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 sm:mx-3">
                <Image
                  src={cert.imageSrc}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 75vw, 290px"
                  className="object-contain p-1 transition-transform duration-500 hover:scale-[1.04]"
                />
              </div>

              {/* CARD INFO */}
              <div className="p-3.5 sm:p-5">
                <h3 className="font-Ovo text-base font-semibold text-neutral-800 dark:text-white sm:text-lg">
                  {cert.title}
                </h3>

                <p className="mt-1 min-h-8 font-Ovo text-xs leading-4 text-neutral-500 dark:text-neutral-400 sm:min-h-10 sm:text-sm sm:leading-5">
                  {cert.description}
                </p>

                <div className="mt-3 flex items-center justify-between border-t border-neutral-200 pt-2.5 text-[11px] text-neutral-500 dark:border-white/10 dark:text-neutral-400 sm:mt-4 sm:pt-3 sm:text-xs">
                  <span>View certificate</span>
                  <ArrowUpRight size={14} className="sm:size-[15px]" />
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-2 text-center text-xs tracking-wide text-neutral-400 dark:text-neutral-500"
      >
        A little collection of my learning journey ✦
      </motion.p>

    </section>
  );
};

export default Certificates;