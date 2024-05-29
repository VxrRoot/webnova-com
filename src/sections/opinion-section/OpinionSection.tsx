import SectionHeadline from "@/src/components/headlines/SectionHeadline";
import { FC } from "react";
import OpinionSlider from "./elements/OpinionSlider";

interface IPortfolioSection {}

const OpinionSection: FC<IPortfolioSection> = () => {
    return (
        <div className="padding-x relative z-20">
            <section className="max-w-7xl w-full m-auto py-20 ">
                <SectionHeadline text="Zobacz co mówią o nas inni" />
                <OpinionSlider />
            </section>
        </div>
    );
};

export default OpinionSection;
