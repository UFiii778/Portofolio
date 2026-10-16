"use client";

import React from "react";
import { CgInstagram } from "react-icons/cg";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaDiscord, FaSpotify, FaTiktok } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/luthfiiizzz_?igsh=Nm4xdnE1dmg4aHZy",
      icon: <CgInstagram className="w-5 h-5" />,
      hoverColor: "hover:text-pink-500 hover:border-pink-500/50 hover:shadow-pink-500/20",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/luthfi-abdillah-80192438b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: <LiaLinkedinIn className="w-5 h-5" />,
      hoverColor: "hover:text-blue-500 hover:border-blue-500/50 hover:shadow-blue-500/20",
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/user/316teau73kzdhsqsvbzufq2nii64?si=d982cad91a604b25.com",
      icon: <FaSpotify className="w-5 h-5" />,
      hoverColor: "hover:text-emerald-500 hover:border-emerald-500/50 hover:shadow-emerald-500/20",
    },
    {
      name: "Discord",
      href: "https://discord.com/users/898745354697195611",
      icon: <FaDiscord className="w-5 h-5" />,
      hoverColor: "hover:text-indigo-500 hover:border-indigo-500/50 hover:shadow-indigo-500/20",
    },
    {
      name: "TikTok",
      href: "https://vt.tiktok.com/ZSXjc2r9f/",
      icon: <FaTiktok className="w-5 h-5" />,
      hoverColor: "hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-cyan-400/20",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-gray-100 pt-16 pb-12 px-[5%] sm:px-[10%] flex flex-col items-center overflow-hidden border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500">

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800/80 z-10">
        
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`w-11 h-11 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-lg ${social.hoverColor}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2.5 px-5 py-2.5 rounded-2xl dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300 shadow-sm active:scale-95"
        >
          <span>Back to Top</span>
          <div className="w-6 h-6 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:-translate-y-1 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
            <ArrowUp className="w-3.5 h-3.5" />
          </div>
        </button>

      </div>

      {/* Copyright */}
      <div className="w-full max-w-5xl pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400 z-10">
        <p>© {new Date().getFullYear()} Luthfi Abdillah. All rights reserved.</p>
        <p className="font-light">
          Designed with ❤️ based in <span className="font-medium text-neutral-700 dark:text-neutral-200">Bandung</span>
        </p>
      </div>

      <div className="w-full max-w-4xl h-44 sm:h-56 my-2 flex items-center justify-center">
        <TextHoverEffect text="Bye.." duration={0.5} />
      </div>

    </footer>
  );
};

export default Footer;