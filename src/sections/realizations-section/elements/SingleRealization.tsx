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
        <Link href={link} target="_blank">
            <div className=" h-full w-full max-w-[400px] rounded-lg m-auto text-black hover:cursor-pointer lg:hover:scale-[103%] transition-all duration-300">
                <div className="rounded-lg">
                    <Image
                        src={img}
                        alt={altText}
                        className="object-cover bg-center rounded-lg h-64"
                    />
                </div>
                <div className="py-2 text-white  border-detailsRed ">
                    <p className="font-bold text-xl py-2">{title}</p>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default SingleRealization;
