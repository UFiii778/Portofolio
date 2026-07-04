"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <div>
            <div>
                <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
            </div>
            <h3 className=" flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi I'm Luthfi A
                <Image src={assets.profile_img} alt="" className="w-6" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Full Stack Web Developer based in Indonesia
            </h1>
            <p>
                I am a Junior Developer from Bandung
            </p>
            <div>
                <a href="#contact">Contact me <Image src={assets.right_arrow_white} alt="" className="w-4"/></a>
            </div>
        </div>
    )
}

export default Header