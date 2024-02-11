"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gridiron Survivor",
    image: "/images/projects/1.png",
    stack: "Tech Stack: React, TypeScript, Next, Jest, React Library, AWS",
    description:
      "May the best win! This application will be created with user authentication & CRUD functionalities",
    github: "https://github.com/LetsGetTechnical/gridiron-survivor",
    demo: "https://github.com/LetsGetTechnical/gridiron-survivor",
  },
  {
    id: 2,
    title: "Resource Library",
    image: "/images/projects/resource.png",
    stack:
      "Tech Stack: React, Javascript, Chakra UI, Next, MongoDB, Expressjs, Nodejs",
    description:
      "A resource management application with user authentication & CRUD functionalities",
    github: "https://github.com/hjkmines/resource_library",
    demo: "https://github.com/hjkmines/resource_library",
  },
  {
    id: 3,
    title: "Fri-Yay!",
    image: "/images/projects/movie.png",
    stack:
      "Tech Stack: React, Javascript, Chakra UI, MongoDB, Expressjs, Nodejs and the Movie Database API",
    description: "Binge the night away with exclusive movies and films!",
    github: "https://github.com/vmaineng/friyay",
    demo: "https://github.com/vmaineng/friyay",
  },
  {
    id: 4,
    title: "Habit-sation",
    image: "/images/projects/habit1.png",
    stack:
      "Tech Stack: React, Javascript, Chakra UI, MongoDB, Expressjs, Nodejs and the Movie Database API",
    description: "Binge the night away with exclusive movies and films!",
    github: "https://github.com/vmaineng/friyay",
    demo: "https://github.com/vmaineng/friyay",
  },
  {
    id: 5,
    title: "Tiny Task",
    image: "/images/projects/tiny.png",
    stack: "Tech Stack: React, Javascript, Chakra UI, Ruby, Ruby on Rails",
    description:
      "A kids activities management application with user authentication & CRUD functionalities",
    github: "https://github.com/vmaineng/Tiny-Task",
    demo: "https://vimeo.com/748869588/2f2d5d8986",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 }, //sliding effect
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-6xl font-bold text-white mt-4 mb-10 md:mb-20">
      {`Mai's Project`}
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                github={project.github}
                demo={project.demo}
              />
            </motion.li>
          ))}
        </ul>
      </h2>
    </section>
  );
};

export default Projects;
