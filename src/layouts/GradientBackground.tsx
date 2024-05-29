import React, { FC } from "react";
import styles from "./GradientBackground.module.css";

interface IGradientBackgroundLayout {
    children: React.ReactNode;
}

const GradientBackgroundLayout: FC<IGradientBackgroundLayout> = ({
    children,
}) => {
    return (
        <section
            className={`min-w-full h-full relative flex items-center justify-center overflow-hidden`}
        >
            <div className={styles.gradient} />
            <div className="z-10 bg-black/40 w-full h-full">{children}</div>
        </section>
    );
};

export default GradientBackgroundLayout;
