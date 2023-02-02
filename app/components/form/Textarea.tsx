import { FC } from "react";
import styles from "./InputText.module.css";
import UseValidation from "@/src/hooks/UseValidation";

interface ITextarea {
    name: string;
    value: string;
    onChange: (e: any) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    error?: string;
    touched?: boolean;
    label?: string;
    placeholder: string;
}

const Textarea: FC<ITextarea> = ({
    name,
    onBlur,
    onChange,
    value,
    error,
    label,
    touched,
    placeholder,
}) => {
    const validation = UseValidation(name, value);

    const validateError = touched && validation?.status === 400;

    return (
        <div
            className={`flex flex-col ${
                validateError ? styles.error : styles.success
            }`}
        >
            <label className="pl-2 text-sm">{label}</label>
            <textarea
                rows={5}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`rounded-lg ${
                    validateError ? "border-red-700" : "border-gray-500"
                } bg-black p-2 border-[1px] outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,255,0,0.5))]`}
            />
            <span className="h-3 text-red-700 pl-2 text-sm">
                {touched && validation?.message}
            </span>
        </div>
    );
};

export default Textarea;
