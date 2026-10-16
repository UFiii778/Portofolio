'use client'

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Certificates from "./components/Cerificates";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Contact from "./components/Contach";
import Footer from "./components/Footer";
import Views from "./components/Views";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <Header />
        <About />
        <Certificates />
        <Work />
        <Gallery />
        <Views />
        <Contact />
        <Footer />
      </div>
    </>
  );
}