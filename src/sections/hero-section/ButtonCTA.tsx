"use client";
import Button from "@/src/components/buttons/animated-button/AnimatedButton";
import { FC } from "react";

interface IButtonCTA {
    text: string;
}

const ButtonCTA: FC<IButtonCTA> = ({ text }) => {
    return (
        <Button
            value={text}
            onClick={() =>
                document.getElementById("contact_section")?.scrollIntoView()
            }
        />
    );
};

export default ButtonCTA;
