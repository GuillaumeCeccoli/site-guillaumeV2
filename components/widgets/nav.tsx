"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLinks } from "../data/links";
import useScrollHook from "../../lib/hooks/scroll";

export default function Nav() {
  const { navLinks } = useLinks();
  const { scroll } = useScrollHook();
  return (
    <nav
      className={`w-full sm:h-12 fixed bottom-0 py-2 sm:py-8 sm:top-0 sm:flex sm:flex-row sm:items-center z-10 background-card sm:transition-colors sm:duration-500 sm:ease-in-out ${
        scroll ? "sm:background-card" : "sm:bg-transparent"
      } `}
    >
      <ul className="flex flex-row justify-around items-center mx-auto w-full lg:w-3/5">
        <li className="hidden sm:block">
          <Image
            src="/assets/Logo.svg"
            width={35}
            height={35}
            alt="logo de creanumerik04"
          />
        </li>
        {navLinks.map((link, id) => (
          <li
            key={id}
            className={`${link.underline ? "underline-from-center" : ""} ${
              link.scale ? "scale-on-hover" : ""
            }`}
          >
            <Link href={link.href}>
              <span className="flex items-center space-x-2 sm:hidden">
                {link.icon}
              </span>

              <span className={`${link.className} hidden sm:block lg:text-xl`}>
                {link.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

