"use client";
import Button from "@/app/components/buttons/animated-button/AnimatedButton";
import { FC } from "react";

const ButtonCTA: FC = () => {
  return (
    <Button
      value="Skontaktuj się z nami"
      onClick={() =>
        document.getElementById("contact_section")?.scrollIntoView()
      }
    />
  );
};

export default ButtonCTA;
