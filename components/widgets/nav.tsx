import React from "react";
import Link from "next/link";
import { useLinks } from "../data/links";

export default function Nav() {
  const { navLinks } = useLinks();
  return (
    <nav className="w-full absolute bottom-0 my-2">
      <ul className="flex flex-row justify-around items-center mx-auto">
        {navLinks.map((link, id) => (
          <li key={id}>
            <Link href={link.href}>
              <span className="flex items-center space-x-2 md:hidden"></span>
              {link.icon}
              <span className="hidden">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

