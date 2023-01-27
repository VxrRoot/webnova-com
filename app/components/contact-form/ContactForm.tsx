"use client";
import { sendContactForm } from "@/lib/api";
import { FC, useState } from "react";

const initValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

const initState = { values: initValues, errors: {}, isLoading: false };

const ContactForm: FC = () => {
    const [formState, setFormState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, errors, isLoading } = formState;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormState((prev) => ({
            ...prev,
            values: { ...prev.values, [name]: value },
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState((prev) => ({ ...prev, isLoading: true }));
        try {
            const response = await sendContactForm(values);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="padding-x max-w-7xl mx-auto w-full">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col ">
                    <label htmlFor="">Imię</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <button>Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;
