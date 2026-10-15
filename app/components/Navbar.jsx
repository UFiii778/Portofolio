"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PillNav from './reactbits/PillNav';
import logo from '@/public/icon-dark.png';
import { label } from 'framer-motion/client';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                when: "beforeChildren",
                staggerChildren: 0.1
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
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
        exit: { opacity: 0, x: 20 }
    };

    const menuLinks = [
        { href: "#top", label: "Home" },
        { href: "#about", label: "About Me" },
        { href: "#work", label: "My Work" },
        { href: "#social", label: "Socials" },
        { href: "#contact", label: "Contact Me" }
    ];

    return (
        <>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[-8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isVisible ? 'top-0' : '-top-28'}`}>

                {/* Desktop Menu */}
                <div className="flex justify-center items-center w-full my-6">

                    {/* PillNav di tengah */}
                    <PillNav
                        logo={logo.src}
                        logoAlt="Company Logo"
                        items={[
                            { label: 'Home', href: '#top' },
                            { label: 'About', href: '#about' },
                            { label: 'Work', href: '#work' },
                            { label: 'Social', href: '#social' },
                            { label: 'Contact', href: '#contact' },
                            {
                                label: '',
                                icon: <AnimatedThemeToggler className="flex items-center justify-center p-1" variant="circle" />,
                                href: ''
                            }
                        ]}
                        activeHref="/"
                        itemStyle="plain"
                        hoverEffect="glide"
                        indicator="pill"
                        layout="joined"
                        surface="glass"
                        size="md"
                        bounce={0.3}
                        stretch={0.5}
                        collapse="auto"
                        intro
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
                            className="flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-gray-300 dark:bg-gray-900 shadow-2xl"
                        >
                            <div className="absolute right-6 top-6 cursor-pointer flex items-center gap-4">
                                {/* 3. Tombol Theme Toggler untuk Mobile */}
                                <AnimatedThemeToggler
                                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                                    variant="circle"
                                />
                                <div onClick={closeMenu}>
                                    <Image src={assets.close_black} alt='' className="w-5 dark:invert" />
                                </div>
                            </div>

                            {menuLinks.map((link, index) => (
                                <motion.li
                                    variants={itemVariants}
                                    key={index}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a className="font-Ovo text-lg block w-full py-1 text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white" onClick={closeMenu} href={link.href}>
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