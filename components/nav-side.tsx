"use client";

import { cn } from "@/lib/utils";
import { Brain, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export const NavSide = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="h-8 w-8" />,
      active: pathname.endsWith("/"),
    },
    {
      href: "/aboutme",
      label: "About Me",
      icon: <User className="h-8 w-8" />,
      active: pathname.startsWith("/aboutme"),
    },
    {
      href: "/project",
      label: "Projects",
      icon: <Brain className="h-8 w-8" />,
      active: pathname.startsWith("/aboutme"),
    },
  ];

  return (
    <div className="group">
      <div className="absolute top-[50%] -z-10 ml-12 h-16 w-16 translate-y-[-50%] animate-pulse rounded-full shadow-[0px_0px_30px_5px_rgba(18,230,200,0.5)] transition-all hover:py-8 group-hover:h-[200px] group-hover:animate-none"></div>
      <div className="absolute top-[50%] ml-12 flex h-16 w-16 translate-y-[-50%] flex-col items-center justify-center gap-y-5 rounded-full bg-slate-600/20 transition-all hover:h-[200px] hover:py-8">
        {routes.map((route) => (
          <div
            key={route.label}
            className={cn(
              "group/routes",
              route.active
                ? "text-teal-600"
                : "hidden text-white group-hover:block",
            )}
          >
            <Link href={route.href}>{route.icon}</Link>
            <div className="absolute w-[100px] translate-x-[50px] translate-y-[-100%] opacity-0 transition-all duration-500 group-hover/routes:translate-x-[70px] group-hover/routes:opacity-100">
              {route.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
