import { FC } from "react";

interface ISingleOpinion {
    opinion: string;
    author: string;
}

const SingleOpinion: FC<ISingleOpinion> = ({ author, opinion }) => {
    return (
        <div className="rounded-xl text-md bg-black/30 text-white py-4 px-6 gap-7 flex flex-col border-[1px]">
            <p>{opinion}</p>
            <p className="w-full text-sm italic text-center relative after:w-10 after:h-1 after:absolute after:top-[-12px] after:left-[50%] after:ml-[-20px] after:content-'' after:bg-white ">
                {author}
            </p>
        </div>
    );
};

export default SingleOpinion;
