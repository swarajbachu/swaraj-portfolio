import { PortableTextBlock } from "sanity"

export type Blog = {
    
    _id: string,
    title: string,
    slug: string,
    mainImage: {
        asset: {
            _id: string,
            url: string
        },
        alt: string
    },
    auther: string,
    categories: string[],

    body: PortableTextBlock[];



}