"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
         
            <h3 className=" flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi I'm Luthfi A
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Full Stack Web Developer based in Indonesia
            </h1>
            <p>
                I am a Junior Developer from Bandung
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">Contact me <Image src={assets.right_arrow_white} alt="" className="w-4"/></a>

                 <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">My Resume <Image src={assets.download_icon} alt="" className="w-4"/></a>
            </div>
        </div>
    )
}

export default Header