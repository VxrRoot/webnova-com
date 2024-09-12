import Spinner from "@/src/components/loader/Loader";
import React from "react";

const Loader = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Spinner />
        </div>
    );
};

export default Loader;
