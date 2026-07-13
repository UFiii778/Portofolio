"use client";

import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { CgInstagram } from "react-icons/cg";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaDiscord, FaSpotify } from "react-icons/fa";

const Footer = () => {

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/luthfiiizzz_?igsh=Nm4xdnE1dmg4aHZy",
      icon: <CgInstagram className="w-5 h-5" />, 
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/luthfi-abdillah-80192438b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: <LiaLinkedinIn className="w-5 h-5" />,
    },
    {
      name: "Spotify",
      href: "https://https://open.spotify.com/user/316teau73kzdhsqsvbzufq2nii64?si=d982cad91a604b25.com",
      icon: <FaSpotify className="w-5 h-5" />,
    },
     {
      name: "Discord",
      href: "https://discord.com/users/898745354697195611",
      icon: <FaDiscord className="w-5 h-5" />,
    },
    {
      name: "TikTok",
      href: "https://vt.tiktok.com/ZSXjc2r9f/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95.89 2.25 1.45 3.56 1.55V9.7c-1.25-.06-2.43-.53-3.41-1.3-.12-.09-.24-.2-.35-.31v5.88c.03 3.44-2.11 6.64-5.36 7.75-3.66 1.12-7.73-.55-9.43-3.93-1.89-3.5-.42-8.15 3.25-9.84.97-.42 2.03-.59 3.09-.5v3.94c-.81-.13-1.65.04-2.33.51-.97.64-1.46 1.87-1.21 3 .29 1.4 1.59 2.4 3.02 2.3 1.45.04 2.72-1.01 2.91-2.45.05-.33.05-.67.05-1V0h2.31z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-[#030014] text-gray-300 border-t border-gray-900 py-12 px-[5%] sm:px-[10%] flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-gray-900">

        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <a
              key={index} // Menggunakan index karena ada nama duplikat pada LinkedIn
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-950/30 transition-all duration-300 shadow-sm"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* 🟩 COPYRIGHT & FOOTNOTE BAR (Warna teks disesuaikan abu-abu redup agar estetik) */}
      <div className="w-full max-w-5xl pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Luthfi Abdillah. All rights reserved.</p>
        <p className="font-light">
          Designed with ❤️ based in <span className="font-medium text-gray-400">Bandung</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;