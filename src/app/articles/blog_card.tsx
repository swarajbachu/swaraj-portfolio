import React from 'react'
import Image from 'next/image'
import {BsArrowUpRight} from 'react-icons/bs'
import Link from 'next/link'

type BlogCardProps = {
    title: string
    description: string
    date: string
    image: string
    alt: string
    slug: string
    
}

const BlogCard = ({title,alt,description,date,image,slug}:BlogCardProps) => {
  return (
    <div className='flex w-[90%] items-center justify-between gap-8'>
      <div className='flex gap-10'>
        <Image 
        src={image}
         alt={alt?alt:title}
         className='h-auto shadow-lg rounded-3xl' 
         width={250}
        height={250}
         />     
         <div className='flex flex-col justify-between'>
                    <h3 className='text-2xl font-bold'>{title}</h3>
                    <p className='text-sm text-gray-500'>{description}</p>
        </div>
        </div>
        <a className='p-8 rounded-full w-24 h-24 border-2 border-gray-500 hover:border-gray-700'
        href={`/blog/${slug}`}
        >
            <BsArrowUpRight className='text-2xl text-gray-500' />
        </a>

    </div>
  )
}

export default BlogCard
