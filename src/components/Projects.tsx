import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "blog App",
    technologies: ["NextJs", "tailwindcss", "shadcn"],
    image: "",
    link: "",
  },
  {
    title: "fitness website",
    technologies: ["ReactJs", "Sass"],
    image: "",
    link: "",
  },
  {
    title: "coffe website",
    technologies: ["HTML", "CSS", "JS"],
    image: "",
    link: "",
  },
  {
    title: "special Line",
    image: "",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    link: "",
  },
  {
    title: "tesla website clone",
    image: "",
    technologies: ["ReactJs", "styled-components"],
    link: "",
  },
  {
    title: "netflix clone",
    image: "",
    technologies: ["NextJs", "..."],
    link: "",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className=" container mx-auto mt-10 md:w-8/12 lg:w-6/12 "
    >
      <h2 className="mb-10 border-t pt-10 text-center text-[32px]">Projects</h2>
      <ul className="projects-container grid grid-cols-2 gap-4 max-md:grid-cols-1 max-sm:gap-2">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <li
              key={index}
              className="project flex h-64  flex-col  justify-between rounded-md border p-2 shadow-md   dark:border-none dark:dark:bg-[#171819] dark:shadow-none"
            >
              <h3 className="text-xl font-bold capitalize ">{project.title}</h3>
              <img width="80" src={project.image} />
              <ul className="px-4 py-2">
                {project.technologies.map((tec, index) => (
                  <li key={index}>{tec}</li>
                ))}
              </ul>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
