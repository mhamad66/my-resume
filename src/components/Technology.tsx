import React from "react";
import Image from "next/image";

const Technology = () => {
  const skills = [
    { src: "/icons/html.svg", name: "HTML", alt: "", width: 70, height: 70 },
    { src: "/icons/css.svg", name: "CSS", alt: "", width: 70, height: 70 },
    {
      src: "/icons/javascript.svg",
      name: "JavaScript",
      alt: "",
      width: 70,
      height: 70,
    },
    {
      src: "/icons/typescript.svg",
      name: "TypeScript",
      alt: "",
      width: 70,
      height: 70,
    },
    {
      src: "/icons/bootstrap.svg",
      name: "Bootstrap",
      alt: "",
      width: 70,
      height: 70,
    },
    { src: "/icons/sass.svg", name: "Sass", alt: "", width: 70, height: 70 },
    {
      src: "/icons/tailwindcss.svg",
      name: "tailwindcss",
      alt: "",
      width: 70,
      height: 70,
    },
    {
      src: "/icons/material-ui.svg",
      name: "materialUI",
      alt: "",
      width: 70,
      height: 70,
    },
    {
      src: "/icons/angular.svg",
      name: "Angular",
      alt: "",
      width: 70,
      height: 70,
    },
    { src: "/icons/react.svg", name: "React", alt: "", width: 70, height: 70 },
    {
      src: "/icons/nextjs.svg",
      name: "NextJs",
      alt: "",
      width: 70,
      height: 70,
    },
    { src: "/icons/redux.svg", name: "Redux", alt: "", width: 70, height: 70 },
    { src: "/icons/git.svg", name: "Git", alt: "", width: 70, height: 70 },
    {
      src: "/icons/vuejs.svg",
      name: "Vue",
      description: "Basics",
      alt: "",
      width: 70,
      height: 70,
    },
  ];
  return (
    <section
      id="technology"
      className=" container mx-auto mt-10 mb-56 md:w-8/12 lg:w-6/12 "
    >
      <h2 className="mb-10 border-t pt-10 text-center text-[32px]">
        Technologies
      </h2>
      <ul className="projects-container grid grid-cols-5 gap-4 max-md:grid-cols-4 max-sm:grid-cols-3">
        {skills.map((sk, index) => (
          <li
            key={index}
            className="project flex  h-28 cursor-pointer flex-col items-center justify-center rounded-md border dark:border-0 dark:bg-[#171819] max-md:p-4 lg:p-6"
          >
            <Image
              alt={sk.alt}
              width={sk.width}
              height={sk.height}
              src={sk.src}
              className="invert dark:invert-0"
            ></Image>
            <p className="mt-1 text-sm">{sk.name}</p>
            {sk.description && (
              <p className="mt-0 text-[12px] text-[#10cb8a]">
                {sk.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technology;
