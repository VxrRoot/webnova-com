import SectionHeadline from "@/app/components/headlines/SectionHeadline";
import { FC } from "react";
import RealizationsSlider from "./elements/RealizationsSlider";

interface IPortfolioSection {}

const PortfolioSection: FC<IPortfolioSection> = () => {
    return (
        <div className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <section className="max-w-7xl w-full m-auto py-20 ">
                <SectionHeadline text="Sprawdź moje realizacje" />
                <RealizationsSlider />
            </section>
        </div>
    );
};

export default PortfolioSection;
