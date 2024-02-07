"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { workflowItem } from "../data/mockData";

interface IWorkflowItem extends workflowItem {
    idx: number;
}

export default function WorkflowItem(item: IWorkflowItem) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const md = useTransform(scrollYProgress, [0, 1], [600, -600]);

    return (
        <section
            ref={container}
            className={`min-h-screen max-w-7xl mx-auto overflow-hidden col-gap-20 w-full  grid grid-cols-1 lg:grid-cols-2 justify-center items-center`}
        >
            <motion.div
                style={{ y: md }}
                className={`h-fit flex items-center justify-center ${
                    item.idx % 2 ? "order-1" : "lg:order-2 order-1"
                }`}
            >
                <Image
                    className="opacity-50 lg:opacity-100"
                    alt="workflow-image"
                    src={item.img}
                />
            </motion.div>
            <motion.div
                style={{ y }}
                className={`h-fit flex flex-col px-4 justify-center ${
                    item.idx % 2 ? "order-2" : "lg:order-1 order-2"
                }`}
            >
                <h2 className="font-bold lg:leading-normal lg:text-5xl text-4xl text-start lg:text-start pb-10">
                    {item.title}
                </h2>
                <p
                    lang="pl"
                    className={`text-lg tracking-wide text-left hyphnes lg:text-justify`}
                >
                    {item.desc}
                </p>
            </motion.div>
        </section>
    );
}
