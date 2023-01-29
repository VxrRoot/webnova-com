import { FC } from "react";
import Loader from "../../loader/Loader";

interface IButton {
    name: string;
    onClick: (e: any) => void;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    isLoading?: boolean;
}

const Button: FC<IButton> = ({
    name,
    onClick,
    disabled,
    type = "button",
    isLoading,
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className="border-white border-[1px] p-2 bg-black text-white hover:bg-white hover:text-black transition-all w-full rounded-lg"
        >
            {isLoading ? (
                <span className="flex justify-center">
                    <Loader />
                </span>
            ) : (
                name
            )}
        </button>
    );
};

export default Button;
