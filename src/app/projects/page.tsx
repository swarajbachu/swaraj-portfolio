"use client";

import { AnimatedText, TransitionEffect } from "@/components";
import Head from "next/head";
import React, { useState } from "react";

import ProjectCard from "./project_card";

import styles from "../style";
import { exploreWorlds } from "./constant";
import { staggerContainer } from "@/utils/motion";

import { motion } from "framer-motion";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.4,
              delayChildren: 0.4,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex flex-row lg:flex-col sm:flex min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ProjectCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Swaraj Bachu | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Swaraj Bachu, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <div className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <Explore />

          <span className="lg:!gradient-03" />
        </div>
      </main>
    </>
  );
};

export default projects;
