'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import SplitText from "./components/reactbits/SplitText";

export default function Home() {
  return (
    <>
    <Navbar />
    <SplitText />
    <Header />
    <About />
    </>
  );
}
