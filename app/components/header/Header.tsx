import { FC } from "react";
import Nav from "../nav/Nav";
import Logo from "@/app/components/logo/dsLogo";
import styles from "./header.module.css";
import Link from "next/link";
import SocialIcons from "../social-icons/SocialIcons";

const Header: FC = () => {
    return (
        <header className="w-full fixed flex flex-col top-0 left-0 backdrop-blur-lg px-2 py-4 h-18 lg:px-3 lg:py-5 lg:bg-inherit lg:m-auto lg:h-20 lg:flex-row">
            <div className="m-auto flex justify-between w-full lg:max-w-7xl">
                <div
                    className={`w-auto max-h-8 lg:w-56  ${styles.logo_wr} hover:cursor-pointer `}
                >
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <Nav />
                <div className="lg:w-56 flex items-center">
                    <SocialIcons />
                </div>
            </div>
        </header>
    );
};

export default Header;
