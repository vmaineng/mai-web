"use client";
import React from "react";
import ArticleCard from "./ArticleCard";

const articlesData = [
    {
      id: 1,
      title: "Phase 1 Retrospection",
      image: "/images/arcticlesImg/retrospection.png",
      description:
        "Phase 1 has ended and here's what I learned and what I will take with me",
      link: "https://medium.com/@vmaineng/gridiron-survivor-phase-1-retrospection-what-i-have-learned-and-will-take-with-me-56512a90e03b",
    },
    {
        id: 2,
        title: "It's Merging Time",
        image: "/images/arcticlesImg/merge.png",
        description:
          "Merging conflicts can be a pain but it does not have to be",
        link: "https://medium.com/@vmaineng/its-merging-time-how-to-solve-branch-conflicts-using-the-terminal-0197ff46b935",
      },
];

const Articles = () => {

    return(
        <section id="blogs">
   <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 mb-0">
      {`Blogs Mai Has Wrote`}
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {articlesData.map((article) => (
         
              <ArticleCard
                key={article.id}
                title={article.title}
                description={article.description}
                imgUrl={article.image}
                link={article.link}
              />
     
          ))}
        </ul>
      </h2>
        </section>
    )
}

export default Articles;