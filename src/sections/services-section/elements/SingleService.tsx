import SvgArrow from "@/src/components/icons/SvgArrow";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ISingleService {
    title: string;
    description: string;
    icon: any;
    altText: string;
    link: string;
}

const SingleService: FC<ISingleService> = ({
    description,
    icon,
    title,
    altText,
    link,
}) => {
    return (
        <div className="flex h-[500px] flex-grow-0 gap-5 flex-col items-left border-transparent hover:border-detailsRed bg-backgroundDark/50 rounded-xl p-8 hover:scale-105 border-2 transition-all hover:border-1 duration-300">
            {/* <Image
                src={icon}
                alt={altText}
                priority={true}
                className="rounded-full w-20 h-20 object-cover bg-cover mr-auto"
            /> */}
            {icon}
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-left text-white/80">{description}</p>
            <Link
                className=" mt-auto hover:cursor-pointer ml-auto flex items-center justify-center hover:underline gap-2"
                href={link}
            >
                Czytaj więcej <SvgArrow />
            </Link>
        </div>
    );
};

export default SingleService;
