import { FC } from "react";
import Nav from "../nav/Nav";
import Logo from "@/src/components/logo/dsLogo";
import styles from "./header.module.css";
import Link from "next/link";
import SocialIcons from "../social-icons/SocialIcons";

const Header: FC = () => {
    return (
        <header className="w-full z-20 fixed flex flex-col top-0 left-0 backdrop-blur-lg padding-x py-4 h-16 lg:py-5 bg-black/50 lg:m-auto lg:h-20 lg:flex-row">
            <div className="m-auto flex justify-between w-full lg:max-w-7xl">
                <div
                    className={`w-auto max-h-8 lg:w-56 ${styles.logo_wr} hover:cursor-pointer `}
                >
                    <Link href="/" aria-label="WebNova">
                        <Logo />
                    </Link>
                </div>
                <Nav />
                <div className="flex items-center w-[220px]">
                    <SocialIcons styles="w-[220px]" />
                </div>
            </div>
        </header>
    );
};

export default Header;
