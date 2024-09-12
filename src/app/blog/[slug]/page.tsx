import { IFullBlogPost, ISimplyBlogCard } from "@/lib/interface";
import { getPosts, getSinglePost } from "@/lib/query";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import blogImg from "public/images/single-blog-post.svg";
import { notFound } from "next/navigation";

export const revalidate = 30;

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const data: IFullBlogPost = await getSinglePost(params.slug);

    return {
        title: data?.title,
        description: data?.smallDescription,
        robots: {
            follow: true,
            index: true,
        },
        openGraph: {
            title: data?.title,
            description: data?.smallDescription,
        },
    };
}

export async function generateStaticParams() {
    const data: ISimplyBlogCard[] = await getPosts();

    return data.map(({ currentSlug }) => currentSlug).slice(0, 10);
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
    const data: IFullBlogPost = await getSinglePost(params.slug);

    if (!data) {
        notFound();
    }

    return (
        <div className="bg-backgroundDark border-b relative z-20">
            <article className="h-full pt-40 pb-20 mx-auto max-w-7xl relative  lg:min-h-[500px] min-h-[300px] ">
                <Link href="/blog" className="underline flex px-4">
                    Wróć
                </Link>
                <div className="flex flex-col gap-8 lg:flex-row border-b pb-8">
                    <h1 className="text-4xl flex-1 px-4 pt-10 font-semibold">
                        {data?.title}
                    </h1>
                    <Image
                        alt={`${data?.title}-zdjecie`}
                        src={
                            data?.titleImage
                                ? urlFor(data.titleImage).url()
                                : blogImg
                        }
                        width={1000}
                        height={1000}
                        priority
                        className="lg:h-[300px] flex-1 mt-8 max-w-7xl w-full h-[300px] object-cover object-center lg:rounded-xl"
                    />
                </div>
                <div className="mt-8 prose  px-4 max-w-5xl prose-invert prose-lg w-full mx-auto flex flex-col">
                    <PortableText
                        value={data?.content}
                        components={components}
                    />
                </div>
            </article>
        </div>
    );
};

// Komponent dla obrazów
const ImageComponent = ({ value }: any) => {
    return <img src={urlFor(value).url()} alt={value.alt || " "} />;
};

// Mapowanie komponentów
const components = {
    types: {
        image: ImageComponent,
    },
};

export default BlogPostPage;
