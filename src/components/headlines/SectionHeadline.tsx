import { FC } from "react";

interface ISectionHeadline {
  text: string;
}

const SectionHeadline: FC<ISectionHeadline> = ({ text }) => {
  return (
    <h2
      className={` font-bold w-fit text-3xl lg:text-4xl my-3 flex relative before:content-"" before:w-1/3 lg:before:w-2/3 before:h-1 before:bg-detailsRed before:absolute before:bottom-[-15%]`}
    >
      {text}
    </h2>
  );
};

export default SectionHeadline;
