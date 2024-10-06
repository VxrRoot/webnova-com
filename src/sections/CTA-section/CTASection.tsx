import FreeMeetButton from "@/src/components/free-meet-button/FreeMeetButton";
import WebsiteRocketIcon from "@/src/components/icons/WebsiteRocketIcon";
import Logo from "@/src/components/logo/dsLogo";
import ContainerLayout from "@/src/layouts/ContainerLayout";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

// const FreeMeetButton = dynamic(
//   () => import("../../components/free-meet-button/FreeMeetButton"),
//   {
//     ssr: false,
//   }
// );

const CTASection = () => {
  return (
    <section className="py-20 overflow-hidden" id="kontakt">
      <ContainerLayout>
        <div className="bg-slate-300 rounded-3xl p-10 flex flex-col relative min-h-[500px]">
          <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 opacity-10 h-full">
            <WebsiteRocketIcon />
          </div>
          <div className="absolute lg:left-10 lg:top-10 top-4 left-4">
            <Logo />
          </div>
          <div className="max-md:mt-10 flex justify-center flex-col  items-center gap-10 relative flex-1 h-full z-20">
            <h3 className="text-zinc-900 lg:text-6xl text-3xl leading-tight font-semibold text-center">
              Czas na Twoją idealną stronę
              <br /> skontaktuj się!
            </h3>
            <div className="flex flex-col items-center justify-center-center mt-8">
              <FreeMeetButton text="Wybierz termin" />
              <div className="text-white mt-4 flex items-center">
                <div className="w-4 h-4 rounded-full animate-pulse bg-green-600 mr-4" />
                <span className="text-zinc-900">Dostępne miejsca</span>
              </div>
              <div className="flex flex-col items-center text-zinc-900 mt-4 gap-4">
                <span>lub</span>
                <a
                  href="mailto:office.webnova@gmail.com"
                  className="underline font-semibold"
                >
                  Napisz wiadomość
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default CTASection;
