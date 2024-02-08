import React from "react";
import Image from "next/image";

//functional component

const Banner = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className = "col-span-7 place-self-center">
      <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
        {" "}
        Hello, I'm Mai
      </h1>
      <p className="text-[#ADB7BE] text-lg lg:text-xl">
        Happy that you're here!
      </p>
      </div>
      <div className="col-span-5">
        <Image 
        src="/images/photo.png"
        alt="photo"
        width={300}
        height={300}
        />
      </div>
      </div>
    </section>
  );
};

export default Banner;
