import { FC } from "react";

const Loader: FC = () => {
    return (
        <div className="w-6 h-6 rounded-full bg-transparent border-l-2 border-white animate-spinner  hover:border-black "></div>
    );
};

export default Loader;
