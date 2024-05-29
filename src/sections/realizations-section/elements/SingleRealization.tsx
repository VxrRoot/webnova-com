import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ISingleRealization {
    title: string;
    description: string;
    img: StaticImageData;
    altText: string;
    link: string;
}

const SingleRealization: FC<ISingleRealization> = ({
    title,
    description,
    img,
    altText,
    link,
}) => {
    return (
        <div className="h-full w-full grid grid-cols-1  p-4 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-10 rounded-lg m-auto text-black hover:cursor-pointer lg:hover:scale-[101%] transition-all duration-300 bg-black/40">
            <div className="rounded-lg flex items-center justify-center px-4 lg:p-0 ">
                <Image
                    src={img}
                    alt={altText}
                    className="object-cover bg-center rounded-lg h-56 w-full lg:h-80"
                />
            </div>
            <div className="py-2 text-white flex flex-col border-detailsRed p-4">
                <p className="font-bold text-2xl py-2">{title}</p>
                <p className="text-md">{description}</p>
                <span className="block mt-auto ml-auto">
                    <Link
                        className="py-2 px-4 border-white border-2 rounded-lg transition-all hover:border-detailsRed"
                        href={link}
                        target="_blank"
                    >
                        Projekt LIVE
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SingleRealization;
