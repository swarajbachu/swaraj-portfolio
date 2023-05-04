import { createClient, groq } from "next-sanity";
import { Blog } from "./types/blog";
import { sanityClient } from "./config/client-config";


import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source:any) {
  return builder.image(source)
}


export async function getBlogs():Promise<Blog[]>{

    const client = sanityClient;

    return client.
    fetch(
       groq `*[_type == "post"] {
        _id,
        title,
        slug,
        publishedAt,
        body,
        description,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
}

export async function getBlogBySlug(slug:string):Promise<Blog[]>{
  const client = sanityClient;
  return client.
  fetch(
     groq `*[_type == "post" && slug.current == $slug] {
      _id,
      title,
      slug,
      publishedAt,
      body,
      description,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`,
    {slug}
    )
}


