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
      href: "/projects",
      label: "Projects",
      icon: <Brain className="h-8 w-8" />,
      active: pathname.startsWith("/projects"),
    },
  ];

  return (
    <div className="group">
      <div className="fixed left-[50%] top-[92%] z-10 h-16 w-[200px] translate-x-[-50%] translate-y-[-50%] animate-pulse rounded-full shadow-[0px_0px_30px_5px_rgba(18,230,200,0.5)] transition-all hover:py-8 group-hover:animate-none md:left-0 md:top-[50%] md:ml-12 md:w-16 md:group-hover:h-[200px]"></div>
      <div className="fixed left-[50%] top-[92%] z-20 flex h-16 w-[200px] translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-x-4 gap-y-5 rounded-full bg-black transition-all hover:py-8 md:left-0 md:top-[50%] md:ml-12 md:w-16 md:flex-col md:bg-slate-600/20 md:hover:h-[200px]">
        {routes.map((route) => (
          <div
            key={route.label}
            className={cn(
              "group/routes",
              route.active
                ? "text-teal-600"
                : "text-white group-hover:block md:hidden",
            )}
          >
            <Link href={route.href}>{route.icon}</Link>
            <div className="absolute hidden w-[100px] translate-x-[50px] translate-y-[-100%] opacity-0 transition-all duration-500 group-hover/routes:translate-x-[70px] group-hover/routes:opacity-100 md:block">
              {route.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
