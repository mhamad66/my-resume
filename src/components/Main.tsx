"use client";
import React from "react";
import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Main = () => {
  return (
    <>
      <section
        id="main"
        className="container mx-auto flex items-center justify-center max-md:flex-col max-md:p-5 md:h-screen"
      >
        <article className="basis-1/2 max-xl:basis-9/12 max-md:mt-20">
          <h1 className="flex gap-2 text-[58px] font-semibold  max-xl:text-[48px]  max-sm:text-[22px]">
            {/* eslint-disable react/no-unescaped-entities */}
            Hi, I'm Mohammad
          </h1>
          <p className="text-xl text-[#10cb8a] max-sm:text-[18px]">
            Front End Developer
          </p>
          <div className="social-media-container mt-3  flex items-center gap-6 max-sm:flex-wrap-reverse">
            <Link
              download="Mohammad_Abu_Asali"
              target="_blank"
              href="/cv/my-cv.pdf"
              className="flex h-12 w-40  border-spacing-1  items-center justify-center gap-2 rounded-full border border-[#10cb8a] text-sm text-[#10cb8a] dark:bg-[#171819] max-sm:w-10/12"
            >
              Download CV
              <Download
                className="mb-1 text-[#10cb8a]"
                size={20}
                strokeWidth={2}
              />
            </Link>
            <Link
              target="_blank"
              className="flex h-10 w-10 border-spacing-1 items-center justify-center gap-2 rounded-full border border-[#10cb8a] text-sm dark:bg-[#171819]"
              href="https://www.linkedin.com/in/mohammad-abu-asali-206052208/"
            >
              <Linkedin
                className="mb-1 text-[#10cb8a]"
                size={20}
                strokeWidth={2}
              />
            </Link>
            <Link
              target="_blank"
              className="flex h-10 w-10 border-spacing-1 items-center justify-center gap-1 rounded-full border border-[#10cb8a] text-sm dark:bg-[#171819]"
              href="https://github.com/mhamad66"
            >
              <Github className="text-[#10cb8a]" size={20} strokeWidth={2} />
            </Link>
            <Link
              target="_blank"
              className="flex h-10 w-10 border-spacing-1 items-center justify-center gap-2 rounded-3xl border border-[#10cb8a] text-sm dark:bg-[#171819]"
              href="mailto:mhamadaboasale@gmail.com"
            >
              <Mail className="text-[#10cb8a]" size={20} strokeWidth={2} />
            </Link>
          </div>
          <p className="mt-4 w-9/12 text-sm leading-7  dark:text-white/80 max-md:w-full">
            Over 5 years of experience in creating interactive and engaging web
            interfaces. Specialized in utilizing modern frameworks to ensure
            high-quality code that exceeds client expectations
          </p>
        </article>
      </section>
    </>
  );
};

export default Main;
