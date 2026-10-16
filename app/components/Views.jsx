"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, Send, Sparkles, Heart, CheckCircle2, Loader2 } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const ReviewCard = ({ name, username, avatar, message, created_at }) => {
  return (
    <figure className="relative w-72 sm:w-80 cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/70 p-4 backdrop-blur-md transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg dark:border-white/10 dark:bg-neutral-900/60 dark:hover:border-sky-400/50">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-700">
          <Image src={avatar} alt={name} fill unoptimized className="object-cover" />
        </div>
        <div className="flex flex-col text-left">
          <figcaption className="text-sm font-semibold text-neutral-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-left text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        "{message}"
      </blockquote>
      <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-2 text-[10px] text-neutral-400 dark:border-white/5 dark:text-neutral-500">
        <span>{created_at ? new Date(created_at).toLocaleDateString("id-ID") : "Baru saja"}</span>
        <Heart className="h-3 w-3 text-rose-500 opacity-60 hover:opacity-100 transition-opacity" />
      </div>
    </figure>
  );
};

export default function Views() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot State
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Ambil data komentar dari PostgreSQL
  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/views");
      const result = await res.json();
      if (result.success) {
        setMessages(result.data);
      }
    } catch (err) {
      console.error("Gagal mengambil data pesan:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Kirim komentar baru
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    setIsSuccess(false);

    try {
      const res = await fetch("/api/views", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, website }),
      });
      const result = await res.json();

      if (result.success) {
        if (result.data) {
          setMessages([result.data, ...messages]);
        }
        setName("");
        setMessage("");
        setWebsite("");
        setIsSuccess(true);

        // Reset kembali ke form setelah 4 detik
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      }
    } catch (err) {
      console.error("Gagal mengirim pesan:", err);
    } finally {
      setLoading(false);
    }
  };

  const firstRow = messages.slice(0, Math.ceil(messages.length / 2));
  const secondRow = messages.slice(Math.ceil(messages.length / 2));

  return (
    <section id="views" className="relative w-full overflow-hidden bg-neutral-50 py-20 dark:bg-neutral-950 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-4xl px-5 text-center"
      >
        <h2 className="mt-4 font-Ovo text-2xl font-semibold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
          Say hello to me!
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base dark:text-neutral-400">
          Some impressions, remarks, and messages from visitors. Leave a note or simply say hello!
        </p>
      </motion.div>

      <div className="relative mt-12 flex flex-col items-center justify-center gap-2 overflow-hidden py-4 sm:mt-16">
        {messages.length > 0 ? (
          <>
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((item, idx) => (
                <ReviewCard key={item.id || idx} {...item} />
              ))}
            </Marquee>
            {secondRow.length > 0 && (
              <Marquee reverse pauseOnHover className="[--duration:35s]">
                {secondRow.map((item, idx) => (
                  <ReviewCard key={item.id || idx} {...item} />
                ))}
              </Marquee>
            )}
          </>
        ) : (
          <p className="text-sm text-neutral-400">Nothing..</p>
        )}

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-950" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-12 max-w-lg px-5"
      >
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-neutral-900 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="views-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 font-semibold text-neutral-800 dark:text-white">
                  <MessageSquarePlus className="h-5 w-5 text-sky-500" />
                  <h3>Leave Your Message</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800 outline-none transition-all focus:border-sky-500 focus:bg-white dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-white dark:focus:border-sky-400 dark:focus:bg-neutral-800"
                    required
                  />
                  <textarea
                    rows={3}
                    placeholder="Leave a suggestion, share your impressions, or simply say hello..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800 outline-none transition-all focus:border-sky-500 focus:bg-white dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-white dark:focus:border-sky-400 dark:focus:bg-neutral-800"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:scale-[1.01] hover:shadow-sky-500/25 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending . . .
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center space-y-3 py-6"
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
                  className="text-xl font-bold text-neutral-800 dark:text-neutral-100"
                >
                  Message Sent Successfully!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs"
                >
                  Thank you very much! Your message has been saved to the database and now appears at the top.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}