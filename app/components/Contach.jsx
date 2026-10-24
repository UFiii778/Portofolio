"use client";

import { assets } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sendEmail } from "@/app/actions/sendEmail";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import GradientASCII from "./reactbits/GradientASCII";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const lightColors = ["#0284c7", "#e0f2fe", "#38bdf8", "#0369a1"];
  const darkColors = ["#0284c7", "#FFFFFF", "#1161A6", "#00D0FF"];

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setResult("Sending message via server...");

    const formData = new FormData(event.target);
    const response = await sendEmail(formData);

    if (response.success) {
      setResult(response.message);
      setIsSuccess(true);
      event.target.reset();

      setTimeout(() => {
        setIsSuccess(false);
        setResult("");
      }, 4000);
    } else {
      setResult(response.message);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="w-full bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-20 px-[5%] sm:px-[10%] min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500">
      
      {/* Background Gradient ASCII */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GradientASCII
          lightMode={!isDarkMode}
          colors={isDarkMode ? darkColors : lightColors}
          shape="rise"
          cellSize={16}
          density={0.5}
          glyphOpacity={0.85}
          glow={isDarkMode ? 0.4 : 0.1}
          softness={0.6}
          speed={0.8}
          gradientOpacity={isDarkMode ? 0.8 : 0.6}
          grain={0.05}
          mouseInteraction={true}
          clickEffect="wave"
          intro
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 mt-10 relative"
      >

        {/* Column Kiri - Info Kontak dengan Efek Glass Container */}
        <div className="lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 rounded-3xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-xl">
          <span className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-2 block tracking-wider uppercase">
            Contact us
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold font-Ovo tracking-tight mb-3 text-sky-600 dark:text-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md font-light leading-relaxed">
            Have a project in mind, a question, or just want to say hi? Drop a message below, and it will land straight in my inbox!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Glass Card */}
            <div className="flex gap-3.5 p-3.5 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md border border-white/40 dark:border-neutral-700/50">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Email</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Our friendly team is here to help.</p>
                <a href="mailto:kuraoshen@gmail.com" className="text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline">kuraoshen@gmail.com</a>
              </div>
            </div>

            {/* Live Chat Glass Card */}
            <div className="flex gap-3.5 p-3.5 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md border border-white/40 dark:border-neutral-700/50">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Live chat</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Our friendly team is here to help.</p>
                <span className="text-xs font-medium text-sky-600 dark:text-sky-400 cursor-pointer hover:underline">Start new chat</span>
              </div>
            </div>

            {/* Office Glass Card */}
            <div className="flex gap-3.5 p-3.5 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md border border-white/40 dark:border-neutral-700/50">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Office</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Come say hello at our office HQ.</p>
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-relaxed">Bandung, West Java, Indonesia</p>
              </div>
            </div>

            {/* Phone Glass Card */}
            <div className="flex gap-3.5 p-3.5 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md border border-white/40 dark:border-neutral-700/50">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Phone</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+628989232829" className="text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline">+62 898-9232-829</a>
              </div>
            </div>
          </div>
        </div>

        {/* Column Kanan - Form Email */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl border border-gray-200 dark:border-neutral-800 shadow-2xl rounded-3xl p-6 sm:p-8 min-h-[450px] flex flex-col justify-center relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={onSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">First name *</label>
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-white/80 dark:bg-neutral-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                        required={true}
                        suppressHydrationWarning />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Last name *</label>
                      <input
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-white/80 dark:bg-neutral-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                        required={true}
                        suppressHydrationWarning />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-white/80 dark:bg-neutral-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      required={true}
                      suppressHydrationWarning />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                    <textarea name="message" rows={4} placeholder="Leave us a message..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-800 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-white/80 dark:bg-neutral-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none" required></textarea>
                  </div>

                  <div className="flex items-start gap-2 py-1">
                    <input type="checkbox" id="privacy" className="mt-0.5 rounded text-sky-600 focus:ring-sky-500 border-gray-300 dark:border-neutral-700 dark:bg-neutral-800" required />
                    <label htmlFor="privacy" className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                      You agree to our friendly <span className="underline cursor-pointer text-gray-700 dark:text-gray-300 font-medium">privacy policy</span>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl text-white font-medium text-sm bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 px-7 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700/60 shadow-lg shadow-sky-500/10 dark:shadow-sky-500/20 flex items-center justify-center gap-2"
                    suppressHydrationWarning
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>

                  {result && !isSuccess && (
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">{result}</p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 drop-shadow" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold text-gray-800 dark:text-gray-100"
                  >
                    Message Sent Successfully!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-gray-500 dark:text-gray-400 max-w-xs"
                  >
                    {result || "Thank you! Our team will get back to you as soon as possible."}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;