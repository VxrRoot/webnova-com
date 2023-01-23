import { StaticImageData } from "next/image";
import { FC } from "react";

interface ISingleRealization {
    title: string;
    description: string;
    img: StaticImageData;
    altText: string;
}

const SingleRealization: FC<ISingleRealization> = ({
    title,
    description,
    img,
    altText,
}) => {
    return <div>SingleRealization</div>;
};

export default SingleRealization;
