"use client";
import React, { useEffect, useState } from "react";
import { ChevronUp, CodeXml, Home, List, Moon, Sun } from "lucide-react";

export default function Controller() {
  const [showChevronUp, setShowChevronUp] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);
  const handleDarkMode = (value) => {
    setDarkMode(value);
    localStorage.setItem("darkMode", JSON.stringify(value));
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowChevronUp(true);
      } else {
        setShowChevronUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="dark-mode fixed left-[39px] top-[26%] cursor-pointer rounded-full bg-[#171819] p-3  text-white dark:bg-white dark:text-black max-md:left-auto max-md:right-[4%] max-md:top-[40px] max-md:z-40 max-sm:right-[2%]"
        onClick={() => handleDarkMode(!darkMode)}
      >
        {darkMode ? (
          <Sun className="drop-shadow-2xl hover:text-yellow-300" />
        ) : (
          <Moon className="drop-shadow-2xl hover:text-yellow-300" />
        )}
      </div>
      <div className="fixed left-[40px] top-[36%] w-[40px] items-center justify-center rounded-3xl border bg-white p-6 dark:border-none dark:bg-[#171819] max-md:left-[4%] max-md:top-[40px] max-md:z-40 max-md:h-[48px] max-md:w-auto max-md:p-4 max-md:px-6 max-md:py-3 max-sm:left-[2%]">
        <ul className="flex flex-col items-center justify-center gap-4 max-md:flex-row">
          <li data-text="Main" className="controller-item relative">
            <button onClick={() => scrollToSection("main")}>
              <Home strokeWidth={1} />
            </button>
          </li>
          <li data-text="Time Line" className="controller-item relative">
            <button onClick={() => scrollToSection("timeLine")}>
              <List strokeWidth={1} />
            </button>
          </li>
          {/*<li data-text ="Projects" className="controller-item relative">*/}
          {/*  <button onClick={() => scrollToSection("projects")}>*/}
          {/*    <Presentation strokeWidth={1} />*/}
          {/*  </button>*/}
          {/*</li>*/}
          <li data-text="Technology" className="controller-item relative">
            <button onClick={() => scrollToSection("technology")}>
              <CodeXml strokeWidth={1} />
            </button>
          </li>
          {showChevronUp && (
            <li data-text="To Up" className="controller-item relative">
              <button onClick={scrollToTop} className="focus:outline-none">
                <ChevronUp strokeWidth={1} />
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
