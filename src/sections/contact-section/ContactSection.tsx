import { FC } from "react";
import ContactImg from "../../assets/contactImg.png";
import Image from "next/image";
import ContactForm from "@/app/components/contact-form/ContactForm";

interface IContactSection {
    padding?: boolean;
}

const ContactSection: FC<IContactSection> = ({ padding }) => {
    return (
        <section
            className={`flex flex-col items-center lg:flex-row w-full gap-10 mt-8 ${
                padding && "lg:p-11"
            }`}
        >
            <section className="flex-1">
                <ContactForm />
            </section>
            <section className="flex-1">
                <Image
                    src={ContactImg}
                    alt="Contact image"
                    priority={true}
                    className="w-full h-auto"
                />
            </section>
        </section>
    );
};

export default ContactSection;
