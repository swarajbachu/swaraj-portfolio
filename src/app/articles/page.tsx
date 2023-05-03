"use client"

import React from 'react'
import { getBlogs } from '../../../sanity/sanity-utils'
import { Blog } from '../../../sanity/types/blog';
import BlogCard from './blog_card';
import { motion } from 'framer-motion';
import styles from '../style';
import { staggerContainer } from '@/utils/motion';

export default async function Articles(){

  const blogs = await getBlogs()
  console.log(blogs[0])

  return (
    <div className='min-h-screen'>
      <h1 className='font-bold text-3xl mb-7'>Articles</h1>
      <span  className='absolute gradient-04'/>

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
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {
        blogs.map((blog,index) => (
          console.log(index),
          <div 
          key={blog._id}>
            <BlogCard 
            index={index}
            title={blog.title} 
            description={blog.description} 
            date={blog.publishedAt} 
            image={blog.mainImage?.asset.url?blog.mainImage.asset.url:'/placeholder.jpeg'} 
            alt={blog.mainImage?.alt} 
            slug={blog.slug.current} 
            />
          </div>
        ))
      }
    </motion.div>
    </div>
  );

}
