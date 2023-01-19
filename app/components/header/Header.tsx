import { FC } from "react";
import Nav from "../nav/Nav";
import Logo from "../Logo/Logo";
import styles from "./header.module.css";
import Link from "next/link";

const Header: FC = () => {
    return (
        <header className="w-full fixed top-0 left-0 flex bg-backgroundDark justify-between px-2 py-4 lg:relative lg:px-3 lg:py-5 lg:bg-inherit lg:max-w-screen-2xl m-auto">
            <div
                className={`w-auto lg:w-36 ${styles.logo_wr} hover:cursor-pointer`}
            >
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <Nav />
            <div className="hidden lg:flex w-36 bg-red-300">Social</div>
        </header>
    );
};

export default Header;
