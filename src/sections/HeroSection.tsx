import { FC } from "react";

const HeroSection: FC = () => {
    return (
        <div className="min-h-full">
            <div className="max-w-7xl mx-auto">
                <h1 className={`text-red-500 text-8xl`}>Dawid Słowik</h1>
                <h2 className="text-orange-500">SIEMA</h2>
            </div>
        </div>
    );
};

export default HeroSection;
