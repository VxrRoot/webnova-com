import GradientBackgroundLayout from "@/src/layouts/GradientBackground";
import ContactSection from "@/src/sections/contact-section/ContactSection";
import React from "react";
import ContactForm from "../components/contact-form/ContactForm";

const Contact = () => {
    return (
        <main className="min-h-screen relative ">
            <GradientBackgroundLayout>
                <div className="pt-16 min-h-screen flex items-center mx-auto max-w-7xl">
                    <ContactSection padding={true} />
                </div>
            </GradientBackgroundLayout>
        </main>
    );
};

export default Contact;
