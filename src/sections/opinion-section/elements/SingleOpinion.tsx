import { FC } from "react";
import SvgQuoteIcon from "../../../components/icons/SvgQuoteIcon";
import "../OpinionSection.css";

interface ISingleOpinion {
    opinion: string;
    author: string;
}

const SingleOpinion: FC<ISingleOpinion> = ({ author, opinion }) => {
    return (
        <div className="rounded-xl items-center opinion_wr text-md bg-black text-white py-4 px-6 gap-7 flex flex-col shadow-2xl h-full ">
            <SvgQuoteIcon />
            <p className="text-center">{opinion}</p>
            <p className="w-full mt-auto text-sm italic text-center relative after:w-10 after:h-1 after:absolute after:top-[-12px] after:left-[50%] after:ml-[-20px] after:content-'' after:bg-white ">
                {author}
            </p>
        </div>
    );
};

export default SingleOpinion;
