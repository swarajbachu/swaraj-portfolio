import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <div className="relative py-8 flex items-center justify-evenly lg:flex-col lg:py-6">
         <span className="abosulte right-0 bottom-8 gradient-footer"/>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="/" className=""target={"_blank"}>
            Swaraj Bachu
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline
            underline-offset-2
            "
        >
          Say hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
