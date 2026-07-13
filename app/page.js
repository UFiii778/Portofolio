'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Certificates from "./components/Cerificates";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Contact from "./components/Contach";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Certificates />
    <Work />
    <Gallery />
    <Contact />
    <Footer />
    </>
  );
}
