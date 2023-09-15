import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

interface ISingleService {
    title: string;
    description: string;
    icon: StaticImageData;
    altText: string;
}

const SingleService: FC<ISingleService> = ({
    description,
    icon,
    title,
    altText,
}) => {
    return (
        <div className="flex flex-grow-0 gap-5 flex-col items-center min-h-[500px] bg-backgroundDark/50 rounded-xl p-4 hover:scale-95 transition-all duration-300 hover:cursor-pointer">
            <Image
                src={icon}
                alt={altText}
                priority={true}
                className="rounded-full w-40 h-40 object-cover bg-cover"
            />
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-center">{description}</p>
        </div>
    );
};

export default SingleService;
