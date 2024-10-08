import ContainerLayout from "@/src/layouts/ContainerLayout";
import Link from "next/link";
import { PhoneCall, Mail } from "lucide-react";
import { FC } from "react";
import SocialIcons from "../social-icons/SocialIcons";

const navItems = [
  { name: "Strona głowna", href: "/" },
  { name: "Blog", href: "/blog" },
  // { name: "O nas", href: "/about" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Polityka prywatności", href: "/privacy-policy" },
  { name: "Regulamin", href: "/terms-and-conditions" },
];

const Footer: FC = () => {
  return (
    <footer className="relative bg-zinc-900 z-30 mt-auto py-20">
      <ContainerLayout>
        <div className="text-white flex flex-col items-center gap-4">
          <SocialIcons />
          <div className="flex flex-col items-center md:flex-row gap-2 md:gap-8">
            <p className="">
              <a href="mailto:office.webnova@gmail.com" className="flex gap-4">
                <Mail />
                office.webnova@gmail.com
              </a>
            </p>
            <p className="">
              <a href="tel:+48535919939" className="flex gap-4">
                <PhoneCall /> +48 535 919 939
              </a>
            </p>
          </div>
          <div className="flex gap-4 text-xs">
            <Link href="#">Polityka prywatności</Link>
            <Link href="#">Regulamin</Link>
          </div>
        </div>
      </ContainerLayout>
      {/* <div className="max-w-7xl gap-5 padding-x m-auto grid grid-cols-1 grid-rows-[auto] md:grid-cols-3 md:grid-rows-[1fr_60px] md:gap-0">
        <div className="">
          <h3 className={`${styleH3} whitespace-nowrap`}>O nas</h3>
          <p>
            W Webnova wierzymy w moc kreatywności, innowacji i nieograniczonego
            potencjału, jaki tkwi w sieci. Jesteśmy zespołem pasjonatów,
            gotowych pomóc Ci w osiągnięciu sukcesu online. Nasze strony
            internetowe to nie tylko kod i design, to twoja wizja przekształcona
            w rzeczywistość. Dołącz do nas w podróży ku digitalnemu sukcesowi!
          </p>
        </div>
        <div className="flex flex-col gap-2 md:mx-auto md:items-end w-full md:border-r-[1px] md:pr-[20%]">
          <h3 className={styleH3}>Kontakt</h3>
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
            &#169; 2024. Wszelkie prawa zastrzeżone webnova.com
          </p>
          <div className="flex w-2/4 items-center m-auto md:m-0">
            <SocialIcons smNotHidden styles="flex justify-center" />
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
