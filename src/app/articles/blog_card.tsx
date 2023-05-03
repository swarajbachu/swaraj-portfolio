"use client"

import React from 'react'
import Image from 'next/image'
import {BsArrowUpRight} from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { useRouter } from 'next/navigation'

type BlogCardProps = {
    index: number
    title: string
    description: string
    date: string
    image: string
    alt: string
    slug: string
    
}

const BlogCard = ({index,title,alt,description,date,image,slug}:BlogCardProps) => {

  const router = useRouter()

  return (
    // <div className='flex w-[90%] items-center justify-between gap-8'>
    //   <div className='flex gap-10'>
    //     <Image 
    //     src={image}
    //      alt={alt?alt:title}
    //      className='h-auto shadow-lg rounded-3xl' 
    //      width={250}
    //     height={250}
    //      />     
    //      <div className='flex flex-col justify-between'>
    //                 <h3 className='text-2xl font-bold'>{title}</h3>
    //                 <p className='text-sm text-gray-500'>{description}</p>
    //     </div>
    //     </div>
    //     <a className='p-8 rounded-full w-24 h-24 border-2 border-gray-500 hover:border-gray-700'
    //     href={`/blog/${slug}`}
    //     >
    //         <BsArrowUpRight className='text-2xl text-gray-500' />
    //     </a>

    // </div>
    <div className='relative my-6'>
    <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-row md:flex-col gap-4"
  >
    <img
      src={image}
      alt="planet-01"
      className="w-[270px] md:w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal text-[42px] lg:text-[26px] text-gray-700 dark:text-primaryDark">
          {title}
        </h4>
        <p className="mt-[16px] font-normal text-[20px] lg:text-[14px]  text-gray-500 dark:text-primaryDark">
          {description}
        </p>
      </div>

      <div
        className="flex lg:hidden items-center justify-center w-[100px] h-[100px]
        cursor-pointer
        rounded-full bg-transparent border-[1px] border-gray-500 hover:border-gray-950 dark:hover:border-gray-300 "
        onClick={() => router.push(`/articles/${slug}`)}
      >
        <BsArrowUpRight
          className="w-[40%] h-[40%]  object-contain"
        />
      </div>
    </div>
  </motion.div>
  </div>
  )
}

export default BlogCard
