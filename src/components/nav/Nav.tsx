"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../logo/dsLogo";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-8 my-[3px] rounded-full bg-white transition ease transform duration-300`;

  useEffect(() => {
    // Block scroll
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="w-full flex">
      <div className="hidden lg:flex text-white w-full ">
        <div className="flex-1 flex items-center justify-around">
          <Link
            href="#o-nas"
            className="uppercase text-xl  cursor-pointer border-b border-transparent hover:border-white transition-all"
          >
            O nas
          </Link>
          <Link
            href="#nasz-zespol"
            className="uppercase text-xl  cursor-pointer border-b border-transparent hover:border-white transition-all"
          >
            Nasz zespół
          </Link>
        </div>

        <div className="flex-1 flex justify-center max-w-[200px] [&_svg]:transition-colors [&_svg]:fill-white hover:[&_svg]:fill-slate-300 cursor-pointer ">
          <Logo />
        </div>

        <div className="flex-1 flex items-center justify-around">
          <Link
            href="#uslugi"
            className="uppercase text-xl  cursor-pointer border-b border-transparent hover:border-white transition-all"
          >
            Usługi
          </Link>
          <Link
            href="#kontakt"
            className="uppercase text-xl  cursor-pointer border-b border-transparent hover:border-white transition-all"
          >
            Kontakt
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`flex top-0 h-full z-20 justify-center pt-40 left-0 w-full  fixed xl:hidden transition-all bg-black/90 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-20">
          <Link href="#o-nas" className="uppercase text-xl  text-center">
            O nas
          </Link>
          <Link href="#nasz-zespol" className="uppercase text-xl  text-center">
            Nasz zespół
          </Link>
          <Link href="#uslugi" className="uppercase text-xl  text-center">
            Usługi
          </Link>
          <Link href="#kontakt" className="uppercase text-xl  text-center">
            Kontakt
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden relative z-30 items-center justify-between w-full ">
        {/* <div className="border-logo  w-[300px] bg-creme flex justify-center items-center">
          <Image alt="" src={logo} className="-mt-4" />
        </div> */}
        <div
          className={`w-44 py-4 transition-all ${
            isOpen ? "[&_svg]:fill-black" : "[&_svg]:fill-white"
          }`}
        >
          <Logo />
        </div>
        <div>
          <button
            className="flex flex-col h-12 w-12 rounded relative z-20 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-[10px] opacity-80 group-hover:opacity-100"
                  : "opacity-80 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-80 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-[10px] opacity-80 group-hover:opacity-100"
                  : "opacity-80 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
