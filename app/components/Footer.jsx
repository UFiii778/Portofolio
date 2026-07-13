"use client";

import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
// 🟩 PERBAIKAN: Pastikan namanya Instagram (menggunakan huruf I kapital, bukan l kecil)
import { Instagram, Linkedin } from "lucide-react"; 
import { CgInstagram } from "react-icons/cg";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  // Navigasi menu internal portofolio kamu
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  // Daftar sosial mediamu
  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com/luthfiii.a",
      // 🟩 Gunakan komponen yang sudah diimport dengan benar
      icon: <CgInstagram className="w-5 h-5" />, 
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <LiaLinkedinIn className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaSpotify className="w-5 h-5" />,
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95.89 2.25 1.45 3.56 1.55V9.7c-1.25-.06-2.43-.53-3.41-1.3-.12-.09-.24-.2-.35-.31v5.88c.03 3.44-2.11 6.64-5.36 7.75-3.66 1.12-7.73-.55-9.43-3.93-1.89-3.5-.42-8.15 3.25-9.84.97-.42 2.03-.59 3.09-.5v3.94c-.81-.13-1.65.04-2.33.51-.97.64-1.46 1.87-1.21 3 .29 1.4 1.59 2.4 3.02 2.3 1.45.04 2.72-1.01 2.91-2.45.05-.33.05-.67.05-1V0h2.31z"/>
        </svg>
      ),
    },
  ];

  return (
    // 🟩 Diubah menjadi bg-[#030014] atau bg-black, border atas digelapkan, teks putih lembut
    <footer className="w-full bg-[#030014] text-gray-300 border-t border-gray-900 py-12 px-[5%] sm:px-[10%] flex flex-col items-center">
      {/* 🟩 Border pembatas baris digelapkan */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-gray-900">
        
        {/* 🟩 KIRI: Gabungan Logo Assets + Teks DevStudio (Warna teks utama ganti ke putih) */}
        <div className="flex items-center gap-3 select-none">
          <Image 
            src={assets.logo || "https://picsum.photos/40/40"} 
            alt="Logo" 
            width={40} 
            height={40} 
            className="w-9 h-9 object-contain"
          />
          {/* Teks DevStudio */}
          <span className="text-xl font-bold font-Ovo tracking-tight text-white">
            Dev<span className="text-sky-400 font-extrabold">Studio</span>
          </span>
        </div>

        {/* 🟩 TENGAH: Menu Navigasi (Warna teks default abu-abu terang, hover cerah ke sky-400) */}
        <ul className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-gray-400">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="hover:text-sky-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 🟩 KANAN: Ikon Sosial Media (Warna border diubah jadi gelap, hover menyala cerah di latar gelap) */}
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