"use client"

import { getBlogBySlug } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"; 
import { Blog } from "../../../../sanity/types/blog";
import { RichText } from "./rich_text";
import Image from "next/image";



export default function Page() {

  const [page, setPage] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {slug} = useParams();

  

useEffect(() => {
  async function fetchPage() {
  const page = await getBlogBySlug(slug);
  setPage(page);
  console.log(page[0])
  setIsLoading(false);
  }
  fetchPage();
}, []);

if(isLoading) return (
  <div>
      <h1>Loading...</h1>
  </div>
);

  return (
    <div><h1 className=" text-primary dark:text-primaryDark text-5xl font-extrabold">{page[0].title}</h1>
    <Image
      src={page[0].mainImage?.asset.url?page[0].mainImage.asset.url:'/placeholder.jpeg'}
      alt='Blog Post Image'
      className='rounded-lg'
      width={500}
      height={500}
    />
      <div className="text-lg text-gray-700 dark:text-gray-400 mt-10"><PortableText value={page[0].body} components={RichText} /></div>
    </div>
  )
}