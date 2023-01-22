import React from "react";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
    return (
        <section
            className={`min-w-full min-h-screen relative flex items-center justify-center overflow-hidden`}
        >
            <div className={styles.gradient} />
            <div className="z-10 bg-black/50 w-full h-full absolute">
                SERVICES
            </div>
        </section>
    );
};

export default ServicesSection;
