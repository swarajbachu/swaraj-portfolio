import { PortableTextBlock } from "sanity"

export type Blog = {
    
    _id: string,
    title: string,
    slug: string,
    publishedAt: string,
    mainImage: {
        asset: {
            _id: string,
            url: string
        },
        alt: string
    },
    auther: string,
    description: string,
    categories: string[],
    body: PortableTextBlock[];



}