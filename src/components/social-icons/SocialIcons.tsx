import { FC } from "react";
import SvgIconFacebook from "../icons/SvgIconFacebook";
import SvgIconInstagram from "../icons/SvgIconInstagram";
import SvgIconLinkedin from "../icons/SvgIconLinkedin";

interface ISocialIcons {
  smNotHidden?: boolean;
  styles?: string;
}

const SocialIcons: FC<ISocialIcons> = ({ smNotHidden, styles }) => {
  return (
    <div className={` ${styles} lg:items-center  space-x-4 flex `}>
      <a
        href="https://www.facebook.com/profile.php?id=100071854187238"
        target="_blank"
        className="w-6  hover:cursor-pointer hover:scale-110 transition-transform"
        rel="nopener noreferrer"
        aria-label="Facebook"
      >
        <SvgIconFacebook styles="fill-white w-full h-auto  transition-all" />
      </a>

      <a
        href="https://www.instagram.com/webnova_com/"
        target="_blank"
        className="w-6  hover:cursor-pointer hover:scale-110 transition-transform"
        rel="nopener noreferrer"
        aria-label="Instagram"
      >
        <SvgIconInstagram styles="fill-white w-full h-auto  transition-all" />
      </a>
      <a
        href="https://www.linkedin.com/in/dawid-s%C5%82owik-343847233/"
        target="_blank"
        className="w-6 hover:cursor-pointer hover:scale-110 transition-transform"
        rel="nopener noreferrer"
        aria-label="Linkedin"
      >
        <SvgIconLinkedin styles="fill-white w-full h-auto  transition-all" />
      </a>
    </div>
  );
};

export default SocialIcons;
