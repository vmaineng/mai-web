"use client";
import React from "react";
import PresentationCard from "./PresentationCard";

const presentationData = [
    {
      id: 1,
      title: "Playwright - Gridiron Survivor",
      image: "/images/presentations/playwright.png",
      stack: "Tech Stack: Playwright",
      description:
        "How Playwright will be used in our project and highlighting 3 main Playwright objectives",
      github: "https://github.com/LetsGetTechnical/gridiron-survivor",
      demo: "https://www.youtube.com/watch?v=ZNHIBZQuUjM&t=4097s",
    },
];

const Presentations = () => {

    return(
        <section id="presentations">
   <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      {`Presentations Mai Conducted`}
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {presentationData.map((presentation) => (
         
              <PresentationCard
                key={presentation.id}
                title={presentation.title}
                description={presentation.description}
                imgUrl={presentation.image}
                github={presentation.github}
                demo={presentation.demo}
              />
     
          ))}
        </ul>
      </h2>
        </section>
    )
}

export default Presentations;