import { Metadata } from "next";
import React from "react";
import inProgressSvg from "public/images/in-progres.svg";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Webnova - blog",
    description:
        "Tworzymy dedykowane strony internetowe, które pomagają naszym klientom maksymalizować zyski oraz realizować cele w ich biznesach",
    alternates: {
        canonical: `https://www.web-nova.pl/blog`,
    },
};

const Blog = () => {
    return (
        <main className="min-h-screen pt-32 max-w-7xl mx-auto flex flex-col justify-center items-center">
            <Image alt="in-progress-img" src={inProgressSvg} />
            <Link
                className="border-white border-[1px] p-2 bg-black text-white hover:bg-white hover:text-black transition-all px-4 mt-8 rounded-lg"
                href="/"
            >
                Strona główna
            </Link>
        </main>
    );
};

export default Blog;
