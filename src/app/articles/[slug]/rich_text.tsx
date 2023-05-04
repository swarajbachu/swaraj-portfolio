import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {urlFor} from "../../../../sanity/sanity-utils"

export const RichText = {

    types: {
        image: ({ value }:any) => {
            return(
                 <div className='relative w-full h-96 m-10 mx-auto'>
                     <Image
                className='object-contain'
                src={urlFor(value.asset).url()}
                fill
                alt='Blog Post Image'
                />
                </div>
             );
        },
    },
    lists: {
        bullet: ({ children }:any) => (
             <ul className='ml-10 py-5 list-disc space-y-5'>
                {children}
            </ul>
        ),
        numbered: ({ children }:any) => (
            <ol className='mt-lg list-decimal'>
                {children}
            </ol>
        ),
    },
    blocks: {
        h1: ({ children }:any) => (
            <h1 className='text-5xl py-10 font-bold'>{children}</h1>
        ),
        h2: ({ children }:any) => (
            <h2 className='text-4xl py-10 font-bold'>{children}</h2>
        ),
        h3: ({ children }:any) => (
            <h3 className='text-3xl py-10 font-bold'>{children}</h3>
        ),
        h4: ({ children }:any) => (
            <h4 className='text-2xl py-10 font-bold'>{children}</h4>
        ),
        blockquote: ({ children }:any) => (
            <blockquote className='border-l-4 border-primary dark:border-darkPrimary my-5 pl-5 py-5'>
                {children}
            </blockquote>
        ),
        
    },
    code: ({ children }:any) => (
        <pre className='bg-gray-200 dark:bg-gray-800 p-5 rounded-md'>
            <code>{children}</code>
        </pre>
    ),

    marks: {
        link: ({ children, value }:any) => {
            const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined;

            return(
                <Link
                href={value.href}
                rel={rel}
                className='text-primary dark:text-darkPrimary hover:text-black dark:hover:text-white'
                >
                    {children}
                </Link>
            );
        },
    },



}

