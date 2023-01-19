import Link from "next/link";
import { FC } from "react";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
];

const Nav: FC = () => {
    return (
        <nav className="hidden lg:flex space-x-16">
            {links.map(({ name, href }) => (
                <Link href={href} legacyBehavior>
                    <a className="text-gray-400 transition-all hover:text-white">
                        {name}
                    </a>
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
