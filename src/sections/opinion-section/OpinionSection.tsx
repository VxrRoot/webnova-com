import SectionHeadline from "@/app/components/headlines/SectionHeadline";
import { FC } from "react";
import OpinionSlider from "./elements/OpinionSlider";

interface IPortfolioSection {}

const OpinionSection: FC<IPortfolioSection> = () => {
    return (
        <div className="padding-x bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <section className="max-w-7xl w-full m-auto py-20 ">
                <SectionHeadline text="Zobacz co mówią o nas inni" />
                <OpinionSlider />
            </section>
        </div>
    );
};

export default OpinionSection;
