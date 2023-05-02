'use client';

import { motion } from 'framer-motion';
import styles from '../style';
import { fadeIn } from '@/utils/motion';
import {BiCodeAlt} from 'react-icons/bi'
import Link from 'next/link';


interface ProjectCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
  projectLink: string;
}

const ProjectCard = ({ id, imgUrl, title, index, active, handleClick, projectLink }: ProjectCardProps) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${ active === id ? 'flex-[3.5] lg:flex-[10]' : 'flex-[0.5] lg:flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold text-[26px] sm:text-[18px] text-primary absolute z-0 min:[1023px]:bottom-20 lg:rotate-0 rotate-[-90deg]   min-[1023px]:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          onClick={() => window.open(projectLink)}
        >
          <BiCodeAlt className="w-1/2 h-1/2 object-contain" />
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Go To Project
        </p>
        <h2 className="mt-[24px] font-semibold text-[32px] sm:text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ProjectCard;
