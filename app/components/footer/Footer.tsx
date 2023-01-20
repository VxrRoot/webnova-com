import Link from "next/link";
import { FC } from "react";
import SocialIcons from "../social-icons/SocialIcons";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Polityka prywatności", href: "/polityka-prywatności" },
    { name: "Regulamin", href: "/regulamin" },
];

const Footer: FC = () => {
    const styleH3 = `font-bold text-lg text-2xl my-3 flex relative w-min before:content-"" before:w-2/3 before:h-1 before:bg-detailsRed before:absolute before:bottom-0`;
    const styleP = "hover:cursor-pointer hover:text-detailsRed transition-all";
    return (
        <footer className="bg-backgroundDark">
            <div className="max-w-7xl gap-5 padding-x m-auto grid grid-cols-1 grid-rows-[auto] md:grid-cols-3 md:grid-rows-[1fr_60px] md:gap-0">
                <div className="">
                    <h3 className={`${styleH3} `}>About</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti quaerat sapiente voluptates eaque quo impedit
                        nam! Inventore, exercitationem, illum quod soluta
                        corporis temporibus iste quibusdam numquam laborum
                        repellat suscipit vero!
                    </p>
                </div>
                <div className="flex flex-col gap-2 md:mx-auto md:items-end w-full md:border-r-[1px] md:pr-[20%]">
                    <h3 className={styleH3}>Kontakt</h3>
                    <p className={styleP}>
                        <a href="mailto:dawidslowik379@gmail.com">
                            dawidslowik379@gmail.com
                        </a>
                    </p>
                    <p className={styleP}>
                        <a href="tel:+48535919939">+48 535 919 939</a>
                    </p>
                </div>
                <div className="flex flex-col md:mx-auto w-full md:items-start md:pb-4 md:pl-[20%]">
                    <h3 className={`${styleH3}`}>Nawigacja</h3>
                    <nav>
                        <ul className="p-0 m-0">
                            {navItems.map(({ name, href }, idx) => (
                                <li key={idx} className="mb-2 md:text-left">
                                    <Link href={href} legacyBehavior>
                                        <a className="transition-all hover:text-detailsRed">
                                            {name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col gap-3 pb-4 md:col-span-3 md:flex-row md:justify-between md:items-center border-solid border-t-[1px] pt-5">
                    <p className="text-xs self-center">
                        {" "}
                        &#169; 2023. Wszelkie prawa zastrzeżone dawidslowik.pl
                    </p>
                    <div className="flex w-2/4 items-center m-auto md:m-0">
                        <SocialIcons smNotHidden styles="flex justify-center" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
