import { formatDate } from "@/utils/formatDate";
import sanityClient from "@/utils/sanityClient";
import Link from "next/link";

async function getStaticProps() {
    const query = `
  *[_type == "blog"]{
      "title":title,
      "slug": slug.current,
      "summary": summary,
      "publishedAt": publishedAt,
      "tags": tags[]->{ name }
  }
  `;
    //   "content": content,
    //   "authorName": author->name,
    const data = await sanityClient.fetch(query);
    return data;
}
const page = async () => {
    const blogs = await getStaticProps();
    return (
        <div>
            {/* Blog*/}
            <div id="blog" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                {/* Product tag-line */}
                <div className="relative mx-auto text-center md:-mt-5 md:mb-16">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold">Browse Our Blogs <span className="text-primary">@Logic
                        Fables</span></h2>
                </div>
                {/* Card list */}
                <div className="mt-10 mx-auto grid gap-16 grid-cols-1 md:mt-0 md:grid-cols-2 lg:grid-cols-3">

                    {blogs.map((blog) => (
                        <article key={blog.slug} className="hover:animate-background rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                            <div className="rounded-[10px] p-4 !pt-20 sm:p-6">
                                <time dateTime={formatDate(blog.publishedAt)} className="block text-xs"> {formatDate(blog.publishedAt)} </time>
                                <Link href={`/blogs/blog/${blog.slug}`}>
                                    <h3 className="mt-0.5 text-lg font-medium text-black">
                                        {blog.title}
                                    </h3>
                                </Link>
                                <div className="mt-4 flex flex-wrap gap-1">

                                    {
                                        blog.tags.map((tag) => (
                                            <span key={tag.name} className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                                {tag.name}
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-black line-clamp-6">
                                        {blog.summary}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <Link href={`/blogs/blog/${blog.slug}`} className="block text-center p-2 px-5 text-sm text-white bg-purple-700  rounded hover:bg-purple-900">
                                        Read More
                                    </Link>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page