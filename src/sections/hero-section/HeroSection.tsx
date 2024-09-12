"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React, { ReactNode } from "react";
import FreeMeetButton from "@/src/components/free-meet-button/FreeMeetButton";
import ContainerLayout from "@/src/layouts/ContainerLayout";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

const AuroraBackground = ({
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <section className="">
      <div
        className={cn(
          "relative flex flex-col  h-[100vh] items-center justify-center  bg-zinc-900  text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]

            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert-0
            after:content-[""] after:absolute after:inset-0 
            after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>

        <div className="relative z-20 xl:max-w-[72rem] 3xl:max-w-[90rem] flex flex-col items-center px-4 md:px-3 lg:px-4">
          <h1 className="3xl:text-8xl xl:text-6xl text-4xl font-semibold text-center  text-white pt-28">
            Tworzymy strony internetowe, które napędzają rozwój Twojej firmy.
          </h1>
          <h2 className="text-center lg:text-xl text-base font-light mt-10 text-white text-gray-200 xl:max-w-[70rem]">
            Oferujemy{" "}
            <strong>kompleksowe usługi tworzenia stron internetowych</strong>:
            od <strong>strategii marketingowej</strong>, przez{" "}
            <strong>profesjonalny web design</strong>, po{" "}
            <strong>rozwój aplikacji webowych</strong> i{" "}
            <strong>automatyzację procesów biznesowych</strong>
          </h2>
          <div className="flex flex-col items-center justify-center-center mt-8">
            <FreeMeetButton />
            <div className="text-white mt-4 flex items-center">
              <div className="w-4 h-4 rounded-full animate-pulse bg-green-600 mr-4" />
              <span>Dostępne miejsca</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuroraBackground;
