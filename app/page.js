'use client'

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader"; 
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Certificates from "./components/Cerificates";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Contact from "./components/Contach";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && <Navbar />}
      
      <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <Header />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}