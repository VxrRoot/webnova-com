import { FC } from "react";
import Nav from "../nav/Nav";
import Logo from "@/src/components/logo/dsLogo";
import styles from "./header.module.css";
import Link from "next/link";
import SocialIcons from "../social-icons/SocialIcons";

const Header: FC = () => {
    return (
        <header className="w-full bg-black/40 relative z-50 flex flex-col top-0 left-0 padding-x py-4 h-16 lg:py-5  lg:m-auto lg:h-20 lg:flex-row">
            <div className="m-auto flex justify-between w-full lg:max-w-7xl">
                <div
                    className={`w-auto max-h-8 lg:w-56 ${styles.logo_wr} hover:cursor-pointer `}
                >
                    <Link href="/" aria-label="WebNova">
                        <Logo />
                    </Link>
                </div>

                <div className="flex items-center gap-8">
                    <Nav />
                    <SocialIcons styles="w-[220px]" />
                    <span className="hidden lg:block">
                        <Link
                            className="inline-block rounded-xl  p-0.5 bg-gradient-to-r shadow-lg bg-white focus:outline-0 focus:ring hover:animate-none hover:bg-detailsRed transition-all"
                            href={"/kontakt"}
                        >
                            <span className="block whitespace-nowrap rounded-[11px] bg-backgroundDark px-4 py-2 text-lg text-white hover:bg-backgroundHover transition-all">
                                Bezpłatna konsultacja
                            </span>
                        </Link>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
