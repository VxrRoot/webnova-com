import ContactSection from "@/src/sections/contact-section/ContactSection";
import { Metadata } from "next";
import React from "react";
import ContactForm from "../../components/contact-form/ContactForm";
import SectionHeadline from "../../components/headlines/SectionHeadline";

export const metadata: Metadata = {
  title: "Webnova - skontaktuj się z nami",
  description:
    "Tworzymy dedykowane strony internetowe, które pomagają naszym klientom maksymalizować zyski oraz realizować cele w ich biznesach",
  alternates: {
    canonical: `https://www.web-nova.pl/kontakt`,
  },
};

const Contact = () => {
  return (
    <main className="min-h-screen relative z-20">
      <div className="pt-32 min-h-screen flex flex-col items-center mx-auto max-w-7xl padding-x">
        <SectionHeadline text="Napisz do nas" />
        <ContactSection padding={true} />
      </div>
    </main>
  );
};

export default Contact;
