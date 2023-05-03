"use client"

import { getBlogBySlug } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/navigation";

type Props = {
  params: { slug: string }
}

export default async function Page({params}:Props) {

  


  const page = await getBlogBySlug(params.slug);
  console.log(page)

  return (
    <div><h1 className=" text-primary dark:text-primaryDark text-5xl font-extrabold">{page[0].title}</h1>
      <div className="text-lg text-gray-700 dark:text-gray-400 mt-10"><PortableText value={page[0].body} /></div>
    </div>
  )
}