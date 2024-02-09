import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-white" id="about">
      <div className="md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/photo.png" width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Mai</h2>
          <p className="text-base lg:text-lg">
            {" "}
            Enthuastic, fun, and driven Software Engineer specializing in
            converting technical designs to a user. Strong passion for web
            technologies and web development, digital and personal empathy, and
            excellent communication skills.{" "}
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
