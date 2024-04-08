"use client";
import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#EAE6DF] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Mai Vang - SWE</span>
        <p className="text-slate-200 mb-4 max-w-md">&copy;{new Date().getFullYear()}. All rights reserved</p>
     
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/vmaineng">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/mai-vang-swe/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
     
     
      </div>
    </footer>
  );
};

export default Footer;
