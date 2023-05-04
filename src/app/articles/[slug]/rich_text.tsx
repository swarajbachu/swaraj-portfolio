import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../../sanity/sanity-utils";
import CodeBlock from "./code_block";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative pl-0 w-[80%] sm:w-full h-96 my-10">
          <Image
            style={{
              objectPosition: "top left",
            }}
            className="object-contain text-left ml-0"
            src={urlFor(value.asset).url()}
            fill
            alt="Blog Post Image"
          />
        </div>
      );
    },
  },
  code:({code,language}:any) => (
    <CodeBlock>{code}</CodeBlock>
    ),

  lists: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    numbered: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children, value }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children, value }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children, value }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children, value }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children, value }: any) => (
      <blockquote className="border-l-4 border-primary dark:border-darkPrimary my-5 pl-5 py-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-primary dark:text-blue-300 hover:text-black dark:hover:text-gray-300"
        >
          {children}
        </Link>
      );
    },
    code: ({ children, value }: any) => (
        <CodeBlock language={'html'} >{children}</CodeBlock>
      // <CopyBlock
      // text={children}
      // showLineNumbers={true}
      // theme = {dracula}
      // />
    ),
  },
};
