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
      className="inline-block animate-border rounded-xl bg-white from-#255c99 via-detailsRed to-background bg-[length:400%_400%] p-0.5 bg-gradient-to-r shadow-lg focus:outline-0 focus:ring hover:animate-none hover:from-white hover:to-white transition-all"
    >
      <span className="block rounded-[11px] bg-backgroundDark px-10 py-4 text-xl text-white hover:bg-backgroundHover transition-all">
        {value}
      </span>
    </button>
  );
};

export default Button;
