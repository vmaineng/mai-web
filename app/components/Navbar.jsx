import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const navLinks = [
        {
            title: "About",
            path: "#about",
        },
        {
            title: "Projects",
            path: "#projects",
        },
        {
            title: "Contact",
            path: "#contact",
        },
    ]
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          {" "}
          LOGO{" "}
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
           {navLinks.map((link, index)=> (
            <li key={index}>
                <NavLinks href={link.path} title={link.title} />
            </li>
           ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
