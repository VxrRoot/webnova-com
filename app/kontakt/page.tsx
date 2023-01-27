import GradientBackgroundLayout from "@/src/layouts/GradientBackground";
import React from "react";
import ContactForm from "../components/contact-form/ContactForm";

const Contact = () => {
    return (
        <main className="min-h-screen relative ">
            <GradientBackgroundLayout>
                <div className="pt-16 min-h-screen flex items-center">
                    <ContactForm />
                </div>
            </GradientBackgroundLayout>
        </main>
    );
};

export default Contact;
