"use client";

import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { sendEmail } from "@/app/actions/sendEmail"; // 🟩 IMPORT SERVER ACTION KAMU
import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import Aurora from "./reactbits/Aurora";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🟩 UBAH FUNGSI ON SUBMIT MENJADI SEPERTI INI
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message via server...");

    const formData = new FormData(event.target);

    // Jalankan server action Nodemailer
    const response = await sendEmail(formData);

    if (response.success) {
      setResult(response.message);
      event.target.reset(); // Kosongkan form kembali
    } else {
      setResult(response.message);
    }
    setIsSubmitting(false);
  };

  return (
    // ... Sisa kode tampilan JSX ke bawahnya tetap SAMA PERSIS seperti sebelumnya
    <section id="contact" className="w-full bg-white text-black py-20 px-[5%] sm:px-[10%] min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* 🟩 Efek Aurora dibalik arahnya (rotate-180) agar mengalir dari bawah ke atas */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-25 transform rotate-180">
        <Aurora
          colorStops={["#0ea5e9", "#6366f1", "#a855f7"]} 
          blend={0.5}
          amplitude={1.0}
          speed={0.6}
        />
      </div>

      {/* Main Container Layout */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 mt-10">
        
        {/* LEFT COLUMN: Teks, Foto Profil (di atas), dan Kontak Info */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-sm font-semibold text-sky-600 mb-4 block tracking-wider uppercase">
            Contact us
          </span>
          
          {/* 🟩 FOTO PROFIL: Sekarang dipisah di atas judul (Posisi Lingkaran Merah) */}
          <div className="mb-6 flex justify-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-sky-400 shadow-md">
              <Image 
                src={assets.profile || "https://picsum.photos/200"} 
                alt="Profile"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Judul Utama dengan Gradasi Warna Sky ke Indigo */}
          <h2 className="text-3xl sm:text-5xl font-bold font-Ovo tracking-tight mb-4 text-sky-600 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Chat to our friendly team
          </h2>
          
          <p className="text-gray-600 mb-12 max-w-md font-light">
            We'd love to hear from you. Please fill out this form or shoot us an email.
          </p>

          {/* Grid Informasi Kontak */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {/* Email */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-sm text-gray-500 mb-1">Our friendly team is here to help.</p>
                <a href="mailto:hi@luthfi.com" className="text-sm font-medium text-sky-600 hover:underline">hi@luthfi.com</a>
              </div>
            </div>

            {/* Live Chat */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Live chat</h4>
                <p className="text-sm text-gray-500 mb-1">Our friendly team is here to help.</p>
                <span className="text-sm font-medium text-sky-600 cursor-pointer hover:underline">Start new chat</span>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Office</h4>
                <p className="text-sm text-gray-500 mb-1">Come say hello at our office HQ.</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">Bandung, West Java, Indonesia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-sm text-gray-500 mb-1">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+12345678" className="text-sm font-medium text-sky-600 hover:underline">+62 (8xx) xxxx-xxxx</a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Formulir Kontak (Glassmorphism Putih) */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-6 sm:p-8"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">First name *</label>
                  <input type="text" placeholder="First name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-white/80" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Last name *</label>
                  <input type="text" placeholder="Last name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-white/80" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-white/80" required />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
                <textarea rows={4} placeholder="Leave us a message..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-white/80 resize-none" required></textarea>
              </div>

              <div className="flex items-start gap-2 py-1">
                <input type="checkbox" id="privacy" className="mt-0.5 rounded text-sky-600 focus:ring-sky-500 border-gray-300" required />
                <label htmlFor="privacy" className="text-xs text-gray-500 leading-tight">
                  You agree to our friendly <span className="underline cursor-pointer text-gray-700 font-medium">privacy policy</span>.
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 px-4 rounded-xl text-white font-medium text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-sky-500/20"
              >
                Send message
              </button>
            </form>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default Contact;