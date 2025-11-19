"use client";
import { PointerHighlight } from "./ui/pointer-highlight";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoCodeSharp, IoCodeSlash, IoMoon, IoSunny } from "react-icons/io5";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const Navbar = () => {
  const navData = [
    [
      "Work",
      "/work",
      "bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700",
      "text-blue-500 h-3 w-3",
    ],
    [
      "About",
      "/about",
      "bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700",
      "text-green-500 h-3 w-3",
    ],
    [
      "Contact",
      "/contact",
      "bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700",
      "text-purple-500 h-3 w-3",
    ],
  ];

  const pathname = usePathname();
  const [headerShadow, setHeaderShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const c = () => {
    if (pathname == "/contact") {
      return "text-purple-500 dark:text-purple-500 text-2xl";
    } else if (pathname == "/about") {
      return "text-green-500 dark:text-green-500 text-2xl";
    } else {
      return "text-blue-500 dark:text-blue-500 text-2xl";
    }
  };

  const words = [
    {
      text: "Daniel",
      className: "text-2xl",
    },
    {
      text: "Clerkson.",
      className: c(),
    },
  ];

  useEffect(() => {
    const addHeaderShadow = () => {
      window.scrollY >= 1 ? setHeaderShadow(true) : setHeaderShadow(false);
    };
    window.addEventListener("scroll", addHeaderShadow);
    setIsMenuOpen(false);

    return () => {
      window.removeEventListener("scroll", addHeaderShadow);
    };
  }, [pathname]);


  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div
      className={`flex justify-center w-full mt-10 sticky transition-all z-50  ${
        headerShadow ? "top-0 md:top-10" : "top-0 "
      }`}
    >
      <div
        className={` text-black dark:text-white flex items-center justify-between p-5 mx-auto ${
          headerShadow ? "scrolled" : "no"
        }`}
      >
        <div className="logo">
          <Link href="./">
            <TypewriterEffect
              cursorClassName="hidden"
              words={words}
            ></TypewriterEffect>
          </Link>
        </div>

        <div className="hidden md:flex links justify-between items-center gap-4">
          {navData.map(([title, url, rectangleClass, pointerClass]) => (
            <div key={title} className="relative group">
              <PointerHighlight
                rectangleClassName={`opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out leading-loose ${rectangleClass} ${
                  pathname == url ? "opacity-100" : "opacity-0"
                }`}
                pointerClassName={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${pointerClass} ${
                  pathname == url ? "opacity-100" : "opacity-0"
                }`}
                containerClassName="inline-block"
              >
                <Link
                  href={url}
                  className="relative z-10 px-4 py-2 text-lg font-extralight tracking-wide transition-all duration-300 group-hover:scale-105"
                >
                  {title}
                </Link>
              </PointerHighlight>
            </div>
          ))}

          <AnimatedThemeToggler />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <AnimatedThemeToggler />
          <button
            className="p-2 text-black dark:text-white focus:outline-none z-60 text-3xl font-light"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <IoCodeSlash
                className={`w-6 h-6 transform transition-transform duration-300 ${c()}`}
              />
            ) : (
              <IoCodeSharp
                className={`w-6 h-6 transform transition-transform duration-300 ${c()}`}
              />
            )}
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 md:hidden w-3/4 max-w-sm h-screen bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 z-50 overflow-y-auto ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="pt-24 h-[80vh] justify-center items-center gap-5 flex flex-col px-8">
            {navData.map(([title, url, rectangleClass, pointerClass]) => (
              <div key={title} className="relative group">
                <PointerHighlight
                  rectangleClassName={`opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out leading-loose ${rectangleClass} ${
                    pathname == url ? "opacity-100" : "opacity-0"
                  }`}
                  pointerClassName={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${pointerClass} ${
                    pathname == url ? "opacity-100" : "opacity-0"
                  }`}
                  containerClassName="inline-block"
                >
                  <Link
                    href={url}
                    className="relative z-10 px-4 py-2 text-lg font-extralight tracking-wide transition-all duration-300 group-hover:scale-105"
                  >
                    {title}
                  </Link>
                </PointerHighlight>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
