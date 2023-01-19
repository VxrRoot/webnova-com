import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="bg-backgroundDark">
            <div className="max-w-7xl m-auto flex-col">
                <div>About site</div>
                <div>Nav</div>
                <div>contact</div>
                <div className="text-blue-500">social</div>
            </div>
        </footer>
    );
};

export default Footer;
