import React from 'react'
import { getBlogs } from '../../../sanity/sanity-utils'
import { Blog } from '../../../sanity/types/blog';

export default async function Articles(){

  const blogs = await getBlogs()

  return (
    <div>
      <h1>Articles</h1>
      {
        blogs.map((blog) => (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
          </div>
        ))
      }
    </div>
  );

}
