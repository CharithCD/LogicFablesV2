import { formatDate } from '@/utils/formatDate';
import sanityClient, { urlFor } from '@/utils/sanityClient';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react';

async function getStaticProps(slug) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        title,
        "slug": slug.current,
        publishedAt,
        "content": content,
        "authorName": author->name,
        "tags": tags[]->name,
        image
      }[0]
  `;
    const data = await sanityClient.fetch(query);
    return data;
}

const page = async ({ params }) => {
    const blog = await getStaticProps(params.slug);
    return (
        <>
            <div className='container mx-auto mt-8 p-4 flex flex-col items-center'>
                <div className="px-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold">{blog.title}</h2>
                </div>
                <div className="p-4 flex flex-col md:flex-row justify-around gap-x-12">
                    <p className="text-sm">By: {blog.authorName}</p>
                    <p className="text-sm">Published on: {formatDate(blog.publishedAt)}</p>
                </div>
                <div className='p-4 mt-4'>
                    <Image
                        src={urlFor(blog.image).url()}
                        alt={blog.title}
                        width={600} height={500}
                        className='rounded-md'
                    />
                </div>
            </div>
            <div className='max-w-5xl px-8 mx-auto my-8 flex flex-col prose prose-lg md:p-4 dark:prose-invert'>
                <PortableText value={blog.content} className=''></PortableText>
            </div>
            <div className='mt-24'>
            </div>
        </>

    )
}
export default page