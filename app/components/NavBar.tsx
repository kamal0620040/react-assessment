"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Category", href: "/category" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 justify-center items-center">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={`${
                link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
              } hover:text-zinc-800 transition-colors`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
