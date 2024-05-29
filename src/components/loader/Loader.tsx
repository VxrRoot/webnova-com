import { FC } from "react";

const Loader: FC = () => {
    return (
        <div className="w-6 h-6 rounded-full bg-transparent border-l-2 border-2 border-transparent border-l-detailsRed  animate-spinner " />
    );
};

export default Loader;
