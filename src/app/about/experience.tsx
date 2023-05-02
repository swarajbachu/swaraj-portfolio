import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./liIcon";


type Details = {
    position: string,
    company: string,
    companyLink: string,
    time: string,
    address: string,
    work: string,
}



const Details = ({ position, company, companyLink, time, address, work }:Details) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 rela">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <span className="abosulte gradient-03"/>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Freelancer"
            company="Instagram"
            companyLink="https://gesturs.com"
            time="2020-2021"
            address="Remote"
            work="As a freelancer, I have worked with a significant number 
              of clients and gained extensive experience in the industry. 
              I have been working as a developer and designer since the age 
              of 16, and have had the opportunity to work with a wide range of 
              clients across various industries. In addition to my technical 
              skills, I have developed strong leadership and client management 
              experience. I have successfully delegated tasks to team members 
              and have hired additional help when required, allowing me to 
              effectively manage projects and deliver high-quality work to clients."
          />

          <Details
            position="Founder"
            company="Gesturs"
            companyLink="https://gesturs.com"
            time="2021-present"
            address="remote"
            work="As the founder of Gesturs, a web development agency, 
              I continued to build upon my skills in development and 
              design while also learning the ins and outs of running a business. 
              I have successfully completed numerous projects and built a solid 
              client base, thanks to my experience in acquiring clients, 
              leveraging social media, implementing email marketing strategies, 
              and more. As a solo entrepreneur, I have had to manage all 
              aspects of the business, including marketing, finance, and 
              operations, which has allowed me to develop strong leadership 
              and problem-solving skills. Overall, my experience as the founder 
              of Gesturs has been invaluable in expanding my expertise in 
              both technical and business-related areas.
              "
          />

          <Details
            position="Founder / Software Developer"
            company="Aperturs"
            companyLink="https://aperturs.com"
            time="2023-present"
            address="Remote"
            work=" I also founded a software
               SaaS product focused on social media automation.
              This experience allowed me to dive deeper into the
              technical side of product development and hone
              my skills in TRPC, Next.js, and machine learning.
              Through this venture, I also had the 
              opportunity to further develop my skills 
              in product design, user flows, and frontend 
              development. As a result, I have gained a 
              comprehensive understanding of what it takes 
              to build a successful software product, from concept to
               launch. Overall, my experience in founding a software SaaS has 
               been a valuable learning opportunity that has helped me further 
               expand my skills in both technical and business-related areas."
          />

          {/* <Details
              position="Software Developer Intern"
              company="Microsoft"
              companyLink="https://microsoft.com"
              time="Summer 2019"
              address="Redmond, WA."
              work="Worked on a team responsible for developing new features for
              Microsoft's Windows operating system, including implementing a new
              user interface for a system settings panel and optimizing the
              performance of a core system component."
            />

            <Details
              position="Teaching Assistant"
              company="MIT"
              companyLink="https://mit.edu"
              time="Fall 2018"
              address="Massachusetts Ave, Cambridge, MA."
              work="Assisted in teaching a course on computer programming, held office
              hours to help students with assignments, and graded exams and
              assignments."
            /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
