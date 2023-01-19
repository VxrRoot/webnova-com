import { FC } from "react";
import SvgIconFacebook from "../icons/SvgIconFacebook";
import SvgIconInstagram from "../icons/SvgIconInstagram";
import SvgIconLinkedin from "../icons/SvgIconLinkedin";

interface ISocialIcons {
    smNotHidden?: boolean;
}

const SocialIcons: FC<ISocialIcons> = ({ smNotHidden }) => {
    return (
        <div
            className={`${
                !smNotHidden && "hidden"
            } lg:items-center lg:justify-end space-x-4 lg:flex w-full`}
        >
            <a
                href="https://www.facebook.com/"
                target="_blank"
                className="w-6 fill-w hover:cursor-pointer hover:fill-detailsRed"
                rel="nopener noreferrer"
            >
                <SvgIconFacebook styles="fill-white w-full h-auto hover:hover:fill-detailsRed transition-all" />
            </a>

            <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-6 fill-w hover:cursor-pointer hover:fill-detailsRed"
                rel="nopener noreferrer"
            >
                <SvgIconInstagram styles="fill-white w-full h-auto hover:hover:fill-detailsRed transition-all" />
            </a>
            <a
                href="https://www.instagram.com/"
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
