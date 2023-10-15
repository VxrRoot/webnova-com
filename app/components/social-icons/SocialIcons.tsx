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
    <div
      className={`${
        !smNotHidden && "hidden"
      } ${styles} lg:items-center lg:justify-end space-x-4 lg:flex w-full`}
    >
      <a
        href="https://www.facebook.com/profile.php?id=100071854187238"
        target="_blank"
        className="w-6 fill-w hover:cursor-pointer hover:fill-detailsRed"
        rel="nopener noreferrer"
      >
        <SvgIconFacebook styles="fill-white w-full h-auto hover:hover:fill-detailsRed transition-all" />
      </a>

      <a
        href="https://www.instagram.com/webnova_com/"
        target="_blank"
        className="w-6 fill-w hover:cursor-pointer hover:fill-detailsRed"
        rel="nopener noreferrer"
      >
        <SvgIconInstagram styles="fill-white w-full h-auto hover:hover:fill-detailsRed transition-all" />
      </a>
      <a
        href="https://www.linkedin.com/in/dawid-s%C5%82owik-343847233/"
        target="_blank"
        className="w-6 fill-w hover:cursor-pointer hover:fill-detailsRed"
        rel="nopener noreferrer"
      >
        <SvgIconLinkedin styles="fill-white w-full h-auto hover:hover:fill-detailsRed transition-all" />
      </a>
    </div>
  );
};

export default SocialIcons;
