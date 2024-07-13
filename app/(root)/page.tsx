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
      <Socials />
      <main className="ml-64 mr-48 flex min-h-screen items-center justify-between">
        <div className="space-y-5">
          <h1 className="space-y-2 text-5xl">
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
          <p className="text-2xl font-light">
            5+ Projects, 2+ Live Web Projects
          </p>
        </div>
        <Image src={profile} alt="profile" />
      </main>
    </>
  );
}
