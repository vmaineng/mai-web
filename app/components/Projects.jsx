import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Gridiron Survivor",
      imgURL: "/images/football.png",
      stack: "Tech Stack: React, TypeScript, Next, Jest, React Library, AWS",
      description:
        "May the best win! This application will be created with user authentication & CRUD functionalities",
      github: "https://github.com/LetsGetTechnical/gridiron-survivor",
      demo: "https://github.com/LetsGetTechnical/gridiron-survivor",
    },
    {
      id: 2,
      title: "Resource Library",
      imgURL: "/images/projects/resource.png",
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
      imgURL: "/images/projects/movie.png",
      stack:
        "Tech Stack: React, Javascript, Chakra UI, MongoDB, Expressjs, Nodejs and the Movie Database API",
      description: "Binge the night away with exclusive movies and films!",
      github: "https://github.com/vmaineng/friyay",
      demo: "https://github.com/vmaineng/friyay",
    },
    {
      id: 4,
      title: "Habit-sation",
      imgURL: "/images/projects/habit1.png",
      stack:
        "Tech Stack: React, Javascript, Chakra UI, MongoDB, Expressjs, Nodejs and the Movie Database API",
      description: "Binge the night away with exclusive movies and films!",
      github: "https://github.com/vmaineng/friyay",
      demo: "https://github.com/vmaineng/friyay",
    },
    {
      id: 5,
      title: "Tiny Task",
      imgURL: "/images/projects/tiny.png",
      stack: "Tech Stack: React, Javascript, Chakra UI, Ruby, Ruby on Rails",
      description:
        "A kids activities management application with user authentication & CRUD functionalities",
      github: "https://github.com/vmaineng/Tiny-Task",
      demo: "https://vimeo.com/748869588/2f2d5d8986",
    },
  ];

  return (
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      Mai's Projects
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </h2>
  );
};

export default Projects;
