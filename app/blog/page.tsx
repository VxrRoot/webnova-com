import { Metadata } from "next";
import React, { Suspense } from "react";
import inProgressSvg from "public/images/in-progres.svg";
import Image from "next/image";
import Link from "next/link";
import { ISimplyBlogCard } from "@/lib/interface";
import { getPosts } from "@/lib/query";
import { urlFor } from "@/lib/sanity";
import blogImg from "public/images/single-blog-post.svg";

export const revalidate = 30;

export const metadata: Metadata = {
    title: "Webnova - blog",
    description:
        "Tworzymy dedykowane strony internetowe, które pomagają naszym klientom maksymalizować zyski oraz realizować cele w ich biznesach",
    alternates: {
        canonical: `https://www.web-nova.pl/blog`,
    },
};

const Blog = async () => {
    const data: ISimplyBlogCard[] = await getPosts();

    return (
        <main className="min-h-screen pt-32 mx-auto  flex flex-col px-4 items-center bg-backgroundHover">
            <div className="max-w-7xl mx-auto border-b">
                <div className="flex flex-col lg:flex-row">
                    <h1 className="text-4xl mb-8 lg:mb-0 flex-1 font-bold">
                        Web nova blog.
                    </h1>
                    <p className="flex-1 ">
                        Jeśli chcesz być na bieżąco z najnowszymi trendami w
                        projektowaniu stron internetowych, najlepszymi
                        praktykami w zakresie UX/UI, optymalizacją pod kątem
                        wyszukiwarek, copywritingiem dla stron www oraz
                        mierzeniem efektywności biznesowej w kontekście
                        obecności online, to serdecznie zapraszam Cię do
                        lektury.
                    </p>
                </div>
                <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-8 py-16 border-t lg:gap-4 gap-8">
                    {data.map((post) => {
                        return (
                            <Suspense
                                key={post.id}
                                fallback={<p>Loading...</p>}
                            >
                                <div className="cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm">
                                    <Image
                                        src={
                                            post.titleImage
                                                ? urlFor(post.titleImage).url()
                                                : blogImg
                                        }
                                        alt="Post img"
                                        width={500}
                                        height={500}
                                        className="object-cover w-full rounded-t-lg h-[200px] object-center"
                                    />
                                    <div className="flex flex-col space-y-1.5 p-6">
                                        <div className="text-2xl font-semibold leading-none tracking-tight">{`${post.title.substring(
                                            0,
                                            20
                                        )}...`}</div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <div className="text-sm text-muted-foreground">{`${post.smallDescription.substring(
                                            0,
                                            140
                                        )}...`}</div>
                                    </div>
                                    <div className="flex items-center p-6 pt-0">
                                        <Link
                                            href={`blog/${post.currentSlug}`}
                                            className="underline"
                                        >
                                            Czytaj więcej
                                        </Link>
                                    </div>
                                </div>
                            </Suspense>
                        );
                    })}
                </section>
            </div>
        </main>
    );
};

export default Blog;
