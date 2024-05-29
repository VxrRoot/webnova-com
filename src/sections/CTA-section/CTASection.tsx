import Link from "next/link";
import React from "react";
import styles from "../../layouts/GradientBackground.module.css";

const CTASection = () => {
    return (
        <section className="my-20 border-2 border-white rounded-xl relative overflow-hidden ">
            <div className="flex py-10 items-center flex-col z-10 relative bg-black/50">
                <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6">
                    Zamów darmową konsultację
                </h2>
                <p className="px-4 text-center max-w-[760px] text-md">
                    Skorzystaj z naszej darmowej konsultacji, aby dowiedzieć
                    się, jak możemy pomóc w realizacji Twojego projektu. Nasi
                    eksperci odpowiedzą na wszystkie Twoje pytania i przedstawią
                    najlepsze rozwiązania dostosowane do Twoich potrzeb
                </p>
                <Link
                    className="mt-14 inline-block rounded-xl  p-0.5 bg-gradient-to-r shadow-lg bg-white focus:outline-0 focus:ring hover:animate-none hover:bg-detailsRed transition-all"
                    href={"/kontakt"}
                >
                    <span className="block whitespace-nowrap rounded-[11px] bg-backgroundDark px-4 py-2 text-lg text-white hover:bg-backgroundHover transition-all">
                        Bezpłatna konsultacja
                    </span>
                </Link>
            </div>
            <div
                className={`${styles.gradient} z-0 absolute top-[20px] left-1/5 lg:left-[100px]`}
            />
        </section>
    );
};

export default CTASection;
