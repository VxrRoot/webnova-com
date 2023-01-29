import React, { FC, useEffect } from "react";
import UseValidation from "@/src/hooks/UseValidation";

interface IInput {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    touched?: boolean;
    label?: string;
    type?: string;
    placeholder?: string;
}

const Input: FC<IInput> = ({
    name,
    value,
    onChange,
    onBlur,
    error,
    touched,
    label,
    type,
    placeholder,
}) => {
    const validation = UseValidation(name, value);

    const validateError = touched && validation?.status === 400;

    return (
        <div className="flex flex-col">
            <label className="pl-2 text-sm">{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
                placeholder={placeholder}
                className={`rounded-lg ${
                    validateError ? "border-red-700" : "border-gray-500"
                } bg-black p-2 border-[1px] focus:${
                    validateError ? "border-red-700" : "border-green-500"
                } outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,255,0,0.5))]`}
            />
            <span className="h-3 text-red-700 pl-2 text-sm">
                {touched && validation?.message}
            </span>
        </div>
    );
};

export default Input;
