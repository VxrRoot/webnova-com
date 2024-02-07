import React from "react";
import Image from "next/image";
import NotFoundSvg from "public/images/404.svg";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto flex flex-col items-center justify-center">
            <Image alt="not found page image" src={NotFoundSvg} />
            <Link
                className="border-white border-[1px]  p-2 bg-black text-white hover:bg-white hover:text-black transition-all px-4 rounded-lg"
                href="/"
            >
                Strona główna
            </Link>
        </div>
    );
};

export default NotFoundPage;
