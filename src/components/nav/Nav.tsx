"use client";
import Link from "next/link";
import { FC, useState } from "react";
import SocialIcons from "../social-icons/SocialIcons";

const links = [
    { name: "Kontakt", href: "/kontakt" },
    { name: "Blog", href: "/blog" },
];

const Nav: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-end items-center w-full  relative lg:justify-center z-50">
            <div
                className={`w-full justify-start pt-[20%] flex backdrop-blur-[8px] bg-black transition-opacity duration-500 fixed  ${
                    isOpen ? "top-0 opacity-100 " : "top-[-100vh] opacity-0"
                } right-0 left-0 h-screen flex-col lg:opacity-100 lg:space-x-8 items-center space-y-14 lg:flex lg:flex-row lg:h-full lg:relative lg:top-auto lg:left-auto lg:right-auto lg:space-y-0 lg:py-0 lg:bg-inherit lg:justify-center lg:backdrop-filter-none lg:backdrop-blur-none`}
            >
                {links.map(({ name, href }, idx) => (
                    <Link href={href} legacyBehavior key={idx} scroll={true}>
                        <a
                            className="text-gray-400 transition-all hover:text-white whitespace-nowrap"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            {name}
                        </a>
                    </Link>
                ))}
                <div className={`w-6 lg:hidden`}>
                    <SocialIcons smNotHidden={true} />
                </div>
            </div>
            <div
                onClick={() => setIsOpen((prev) => !prev)}
                className={`lg:hidden hover:cursor-pointer fixed ${
                    isOpen ? "top-8" : "space-y-2"
                } right-4 w-6 h-6`}
            >
                <span
                    className={`block w-8 h-0.5 bg-slate-100 ${
                        isOpen && "-rotate-45"
                    }`}
                />
                <span
                    className={`block w-8 h-0.5 bg-slate-100 ${
                        isOpen && "-translate-y-0.5 rotate-45"
                    }`}
                />
                <span
                    className={`${
                        isOpen ? "hidden" : "block"
                    } w-5 h-0.5 bg-slate-100`}
                />
            </div>
        </nav>
    );
};

export default Nav;
