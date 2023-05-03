import React from 'react'
import { getBlogs } from '../../../sanity/sanity-utils'
import { Blog } from '../../../sanity/types/blog';
import BlogCard from './blog_card';

export default async function Articles(){

  const blogs = await getBlogs()

  return (
    <div>
      <h1 className='font-bold text-3xl mb-7'>Articles</h1>
      {
        blogs.map((blog) => (
          <div key={blog._id}>
            <BlogCard title={blog.title} 
            description={blog.description} 
            date={blog.publishedAt} 
            image={blog.mainImage?.asset.url?blog.mainImage.asset.url:'/placeholder.jpeg'} 
            alt={blog.mainImage?.alt} 
            slug={blog.slug} 
            />
          </div>
        ))
      }
    </div>
  );

}
