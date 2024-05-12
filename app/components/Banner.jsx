"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

//functional component

const Banner = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-200">
           Hello, I&apos;m a
           </span>
           <br/>
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Mai",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Software Engineer",
        1000,
        "Software Developer",
        1000,
        "Web Developer",
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Software Engineer with experience in JavaScript/ TypeScript, React, MongoDB, Express, and Zustand.
          </p>
          <div>
            <Link 
            href="/#about"
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-blue-300 to-pink-200 hover:bg-slate-200 text-white">
               Learn more! 
               </Link>
        </div>
        </div>
       
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#D6CED8] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/me.png"
              alt="photo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={900}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
