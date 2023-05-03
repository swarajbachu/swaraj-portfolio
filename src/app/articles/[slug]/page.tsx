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
    <div><h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page[0].title}</h1>
      <div className="text-lg text-gray-700 mt-10"><PortableText value={page[0].body} /></div>
    </div>
  )
}