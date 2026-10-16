"use client";

import React from "react";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import { HeroParallax } from "./ui/hero-parallax";
const projects = [
  {
    title: "SowanQR",
    description:
      "Digital guest book and visitor management platform for institutions and schools.",
    thumbnail: assets.thumbnailS,
    link: "https://sowanqr.vercel.app/",
  },
  {
    title: "Darahkita",
    description:
      "A digital blood donation platform connecting blood donors with people who need them.",
    thumbnail: assets.thumbnailD,
    link: "https://darahkita.web.id/",
  },
  {
    title: "PKLICB",
    description:
      "A school internship (PKL) management platform for students, companies, and administrators.",
    thumbnail: assets.Pkl,
    link: "#",
  },
  {
    title: "Class Portal RPLCN24",
    description:
      "A class portal for the RPLCN24 community, featuring student profiles and class information.",
    thumbnail: assets.RplCn,
    link: "#",
  },
  {
    title: "Class Portal MPLB2",
    description:
      "A dedicated class portal for sharing class profiles, memories, and information.",
    thumbnail: assets.Mp2,
    link: "#",
  },
  {
    title: "Invitation Site for Unbar",
    description:
      "A personalized digital invitation website with a responsive layout and interactive details.",
    thumbnail: assets.Unbar,
    link: "#",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="relative z-10 mx-auto max-w-7xl px-5 pb-0 pt-20 text-center sm:px-8 md:pt-28"
      >
        <h2 className="font-Ovo text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          A small selection of recent projects
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-500 dark:text-neutral-400 sm:text-base">
          From digital platforms to class portals, here are some projects I’ve
          built and worked on. Scroll to explore each one.
        </p>
      </motion.div>

      <HeroParallax products={projects} />
    </section>
  );
}
