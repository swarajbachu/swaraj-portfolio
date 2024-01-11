"use client"

import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";


import {

  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,Logo

} from "@/components";

import { motion } from "framer-motion";
import useThemeSwitcher from "@/utils/swtichTheme";

type CustomLink = {
    href:string,
    title:string,
    className:string,
}

const CustomLink = ({ href, title, className = "" }:CustomLink) => {
    const asPath = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${asPath === href ? "w-full" : "w-0"}
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};



interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
  href,
  title,
  className = '',
  toggle,
}) => {
  const asPath = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-light
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${asPath === href ? 'w-full' : 'w-0'}
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};



const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme,setTheme } = useTheme();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="https://notes.swarajbachu.tech" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/swarajbachu"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/swarajbachu"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/swarajbachu"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ease w-8 h-8
      ${theme === "light" ? "bg-dark text-light" : "bg-light text-dark"}
      `}
          >
            {theme === "light" ? (
              <SunIcon className={"fill-dark w-6"} />
            ) : (
              <MoonIcon className={"fill-dark w-6"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="https://notes.swarajbachu.tech"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/swarajbachu"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/swarajbachu"
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/swarajbachu"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
        

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-2 w-8
      ${theme === "light" ? "bg-dark text-light" : "bg-light text-dark"}
      `}
            >
              {theme === "light" ? (
            <SunIcon className={"fill-dark w-8"} />
          ) : (
            <MoonIcon className={"fill-dark w-8"} />
          )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />  
      </div>
    </header>
  );
};

export default NavBar;
