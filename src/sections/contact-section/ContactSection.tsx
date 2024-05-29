import { FC } from "react";
import contactForm from "public/images/contactForm2.svg";
import Image from "next/image";
import ContactForm from "@/src/components/contact-form/ContactForm";

interface IContactSection {
    padding?: boolean;
}

const ContactSection: FC<IContactSection> = ({ padding }) => {
    return (
        <section
            className={`relative z-20 flex flex-col items-center lg:flex-row w-full gap-10 my-8 ${
                padding && "lg:p-11"
            }`}
        >
            <section className="flex-1">
                <ContactForm />
            </section>
            <section className="flex-1">
                <Image
                    src={contactForm}
                    alt="Contact image"
                    priority={true}
                    className="w-full h-auto"
                />
            </section>
        </section>
    );
};

export default ContactSection;
