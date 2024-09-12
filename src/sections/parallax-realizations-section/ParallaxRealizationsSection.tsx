"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  { id: 1, url: "/images/tattooflow.png" },
  { id: 2, url: "/images/harmoniaconsult.jpg" },
  { id: 3, url: "/images/rckart-case.webp" },
  { id: 4, url: "/images/mikolajulikowski.jpg" },
  { id: 5, url: "/images/tattooflow.png" },
  { id: 6, url: "/images/harmoniaconsult.jpg" },
  { id: 7, url: "/images/rckart-case.webp" },
  { id: 8, url: "/images/mikolajulikowski.jpg" },
];

const ParallaxRealizationsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
    smooth: 10,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "-10%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "-20%"]);

  return (
    <section ref={targetRef} className="relative mt-40  bg-neutral-900">
      <div className=" top-0 flex flex-col items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="group relative h-[200px] lg:h-[350px] aspect-video overflow-hidden bg-neutral-200"
              >
                <div
                  style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
                ></div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: y }} className="flex gap-4 mt-4">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className="group relative h-[200px] lg:h-[350px] aspect-video overflow-hidden bg-neutral-200"
              >
                <div
                  style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
                ></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxRealizationsSection;
