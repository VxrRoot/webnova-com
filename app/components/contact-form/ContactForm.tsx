"use client";
import { sendContactForm } from "@/lib/api";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import Input from "../form/InputText";
import InputCheckbox from "../form/InputCheckbox";
import Button from "../buttons/button/Button";
import Textarea from "../form/Textarea";

const initValues = {
    name: "",
    mail: "",
    consent: false,
    message: "",
};

const initTouchedValues = {
    name: false,
    mail: false,
    phone: false,
    message: false,
    consent: false,
};

const touchedAll = {
    name: true,
    mail: true,
    phone: true,
    message: true,
    consent: true,
};

const initState = { values: initValues, isLoading: false };

const ContactForm: FC = () => {
    const [formState, setFormState] = useState(initState);
    const [touched, setTouched] = useState(initTouchedValues);

    const { values, isLoading } = formState;

    const handleBlur = (
        e:
            | React.FocusEvent<HTMLInputElement>
            | React.FocusEvent<HTMLTextAreaElement>
    ) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;

        if (name === "consent") {
            setFormState((prev) => ({
                ...prev,
                values: { ...prev.values, [name]: checked },
            }));
            return;
        }

        setFormState((prev) => ({
            ...prev,
            values: { ...prev.values, [name]: value },
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState((prev) => ({ ...prev, isLoading: true }));
        try {
            console.log(values);

            const response = await sendContactForm(values);

            if (response.status === 400) {
                setTouched(touchedAll);
            }

            if (response.status === 200) {
                setFormState(initState);
                setTouched(initTouchedValues);
            }
        } catch (err: any) {
            console.log(err);
        }
        setFormState((prev) => ({ ...prev, isLoading: false }));
    };

    return (
        <section className="padding-x max-w-7xl mx-auto w-full">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Imię"
                        type="text"
                        placeholder="Wprowadź imię"
                        touched={touched.name}
                    />
                    <Input
                        name="mail"
                        value={values.mail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Email"
                        type="text"
                        placeholder="Wprowadź email"
                        touched={touched.mail}
                    />
                    <Textarea
                        name="message"
                        value={values.message}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="Wiadomość"
                        placeholder="Co mogę dla Ciebie zrobić?"
                        touched={touched.message}
                    />
                    <InputCheckbox
                        name="consent"
                        label="Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na moje zapytanie."
                        onBlur={handleBlur}
                        touched={touched.consent}
                        onChange={handleChange}
                        value={values.consent}
                    />
                    <div className="w-40 mt-4">
                        <Button
                            name="Wyślij"
                            type="submit"
                            onClick={handleSubmit}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
