import { createClient, groq } from "next-sanity";
import { Blog } from "./types/blog";


export async function getBlogs():Promise<Blog[]>{

    const client = createClient({
        projectId: 'c3dq0t2n',
        dataset: 'production',
        apiVersion: '2021-03-25',
    })

    return client.
    fetch(
       groq `*[_type == "post"] {
        _id,
        title,
        slug,
        body,
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