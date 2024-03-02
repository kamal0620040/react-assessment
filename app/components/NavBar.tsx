"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import Image from "next/image";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const { user } = useAuthContext();
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Category", href: "/category" },
  ];

  return (
    <nav className="flex space-between border-b mb-5 h-14 justify-between items-center">
      <div></div>
      <div>
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
      </div>
      <div className="mr-6">
        {user ? (
          <div className="relative z-50">
            <Image
              src={user.image}
              width={30}
              height={30}
              className="rounded-full border-2 border-zinc-600"
              alt="user-profile-photo"
              onMouseEnter={() => {
                setToggle(true);
              }}
            />
            {toggle && (
              <div
                className="absolute top-full -left-32 right-9 w-40 mt-3 z-10  bg-white border border-zinc-500 py-3 px-4 rounded-md"
                onMouseEnter={() => setToggle(true)}
                onMouseLeave={() => setTimeout(() => setToggle(false), 500)}
              >
                {[`${user.username}`, "Logout"].map((item) => (
                  <p
                    className="p-1 px-2 rounded-lg text-zinc-800 font-semibold text-sm my-3 cursor-pointer hover:bg-zinc-500"
                    onClick={() => {}}
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link href={"/login"}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
