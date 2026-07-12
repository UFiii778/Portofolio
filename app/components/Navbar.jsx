"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PillNav from './reactbits/PillNav';
import logo from '@/public/logo_dark.png';
import { label } from 'framer-motion/client';

const Navbar = () => {
    // Menggunakan useState untuk kontrol menu mobile yang lebih reaktif
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Varian Animasi untuk Kontainer Menu Mobile (Staggered Effect)
    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                when: "beforeChildren",
                staggerChildren: 0.1 // Jeda waktu animasi antar item menu
            }
        },
        exit: {
            x: "100%",
            transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1 // Animasi keluar terbalik dari bawah ke atas
            }
        }
    };

    // Varian Animasi untuk Tiap Item Menu
    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
        exit: { opacity: 0, x: 20 }
    };

    const menuLinks = [
        { href: "#top", label: "Home" },
        { href: "#about", label: "About Me" },
        { href: "#services", label: "Services" },
        { href: "#work", label: "My Work" },
        { href: "#contact", label: "Contact Me" }
    ];

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image src={assets.header_bg_color} alt='' className="w-full" priority />
            </div>

            <nav className="w-full fixed px-5 lg:px-8 xl:px-[-8%] py-4 flex items-center justify-between z-50">

                {/* Desktop Menu */}
                <div className="flex justify-center w-full my-6">

                    <PillNav
                        logo={logo.src}
                        logoAlt="Company Logo"
                        items={[
                            { label: 'Home', href: '#top' },
                            { label: 'About', href: '#about' },
                            { label: 'Gallery', href: '#gallery' },
                            { label: 'Work', href: '#work'},
                            { label: 'Contact', href: '#contact' }
                        ]}
                        activeHref="/"
                        className="custom-nav"
                        ease="power2.easeOut"
                        baseColor="#000000"
                        pillColor="#ffffff"
                        hoveredPillTextColor="#ffffff"
                        pillTextColor="#000000"
                        theme="light"
                        initialLoadAnimation={false}
                    />
                </div>

                {/* Mobile Menu Menggunakan AnimatePresence & Staggered Menu Style */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-gray-300 shadow-2xl"
                        >
                            {/* Tombol Close */}
                            <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
                                <Image src={assets.close_black} alt='' className="w-5" />
                            </div>

                            {/* Pemetaan Item Menu dengan Animasi Staggered */}
                            {menuLinks.map((link, index) => (
                                <motion.li
                                    variants={itemVariants}
                                    key={index}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a className="font-Ovo text-lg block w-full py-1 text-gray-800 hover:text-black" onClick={closeMenu} href={link.href}>
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;