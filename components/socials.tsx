import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Socials = ({ isVertical }: { isVertical?: boolean }) => {
  return (
    <div
      className={cn(
        "fixed left-[100%] top-[100%]",
        isVertical
          ? "translate-x-[-100px] translate-y-[-250px] space-y-6"
          : "flex translate-x-[-350px] translate-y-[-80px] items-center gap-x-8",
      )}
    >
      <div className="flex h-5 w-5 items-center justify-center rounded-full transition-all hover:shadow-[0px_0px_20px_12px_rgba(18,230,200,0.6)]">
        <Link href="mailto:rifkialfiann@gmail.com" className="">
          <MdEmail className="h-9 w-9" />
        </Link>
      </div>
      <div className="flex h-5 w-5 items-center justify-center rounded-full transition-all hover:shadow-[0px_0px_20px_12px_rgba(18,230,200,0.6)]">
        <Link href="https://instagram.com/rifkialfiannahar" target="_blank">
          <FaInstagram className="h-8 w-8" />
        </Link>
      </div>
      <div className="flex h-5 w-5 items-center justify-center rounded-full transition-all hover:shadow-[0px_0px_20px_12px_rgba(18,230,200,0.6)]">
        <Link href="https://linkedin.com/in/rifkialfiannahar" target="_blank">
          <FaLinkedin className="h-8 w-8" />
        </Link>
      </div>
      <div className="flex h-5 w-5 items-center justify-center rounded-full transition-all hover:shadow-[0px_0px_20px_12px_rgba(18,230,200,0.6)]">
        <Link href="https://wa.me/6285157112297" target="_blank">
          <FaWhatsapp className="h-8 w-8" />
        </Link>
      </div>
      <div className="flex h-5 w-5 items-center justify-center rounded-full transition-all hover:shadow-[0px_0px_20px_12px_rgba(18,230,200,0.6)]">
        <Link href="https://github.com/riverif" target="_blank">
          <FaGithub className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};
