"use client";

import Image from "next/image";
import profile from "@/public/profile.png";
import { TypeAnimation } from "react-type-animation";
import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <>
      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="animate-main-loader absolute top-[100%] z-30 flex h-screen w-screen items-center justify-center overflow-hidden">
          <p className="animate-slide-up">Rifki Alfian Nahar Portfolio</p>
        </div>
      </div>
      <div>
        <Socials />
      </div>
      <main className="grid grid-cols-1 items-center gap-y-4 pt-20 md:ml-64 md:mr-48 md:min-h-screen md:grid-cols-2 md:pt-0">
        <div className="space-y-2 text-center md:space-y-5 md:text-left">
          <h1 className="text-xl md:space-y-2 md:text-5xl">
            <p>Hello,</p>
            <p>
              {`I'm `}
              <span className="font-bold text-teal-500">Rifki Alfian</span>
            </p>
            <p>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Software Engineer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Fullstack Developer",
                  1000,
                  "Telecommunication Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
          </h1>
          <p className="text-sm font-light text-slate-300 md:text-2xl">
            5+ Projects, 2+ Live Web Projects
          </p>
        </div>
        <div className="order-first flex items-center justify-center md:order-none">
          <Image
            src={profile}
            alt="profile"
            className="h-52 w-52 md:ml-72 md:h-[350px] md:w-[350px]"
          />
        </div>
      </main>
    </>
  );
}
