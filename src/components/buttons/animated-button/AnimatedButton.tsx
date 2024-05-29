"use client";
import { FC } from "react";

interface IButton {
    onClick?: () => void;
    value?: string;
}

const Button: FC<IButton> = ({ onClick, value }) => {
    return (
        <button
            onClick={onClick}
            className="inline-block rounded-xl  p-0.5 bg-gradient-to-r shadow-lg bg-white focus:outline-0 focus:ring hover:animate-none hover:bg-detailsRed transition-all"
        >
            <span className="block whitespace-nowrap rounded-[11px] bg-backgroundDark px-4 py-2 text-lg text-white hover:bg-backgroundHover transition-all">
                {value}
            </span>
        </button>
    );
};

export default Button;
