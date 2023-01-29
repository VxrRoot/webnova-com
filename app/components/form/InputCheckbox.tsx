import { FC } from "react";
import styles from "./InputCheckbox.module.css";

interface IInputCheckbox {
    name: string;
    value: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    touched?: boolean;
    label?: string;
}

const InputCheckbox: FC<IInputCheckbox> = ({
    name,
    onBlur,
    onChange,
    value,
    error,
    label,
    touched,
}) => {
    const errorValidate = touched && !value;

    return (
        <div className="flex flex-col gap-2 items-start">
            <label
                className={`flex gap-2 relative ${styles.checkbox} ${
                    errorValidate && styles.error
                }`}
            >
                <input
                    type="checkbox"
                    checked={value}
                    onChange={onChange}
                    name={name}
                    className={`opacity-0 absolute h-8 w-8`}
                />
                <div className="h-5 w-5 absolute bg-black mt-[2px] cursor-pointer rounded-sm border-gray-500 border-[1px]" />
                <span className="text-sm hover:cursor-pointer pl-7 min-h-[30px] flex items-center">
                    {label}
                </span>
            </label>
            <span className="h-3 text-red-700 pl-2 text-sm">
                {errorValidate && "To pole jest wymagane"}
            </span>
        </div>
    );
};

export default InputCheckbox;
