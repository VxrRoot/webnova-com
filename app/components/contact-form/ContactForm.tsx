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
    const [showModal, setShowModal] = useState(false);

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
            const response = await sendContactForm(values);

            if (response.status === 400) {
                setTouched(touchedAll);
            }

            if (response.status === 200) {
                setFormState(initState);
                setTouched(initTouchedValues);

                setShowModal(true);

                setTimeout(() => {
                    setShowModal(false);
                }, 5000);
            }
        } catch (err: any) {
            console.log(err);
        }
        setFormState((prev) => ({ ...prev, isLoading: false }));
    };

    return (
        <section className="max-w-7xl mx-auto w-full">
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
                        placeholder="Jaki projekt wspólnie stworzymy?"
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
                    <div className="w-40 mt-4 mx-auto lg:mx-0">
                        <Button
                            name="Wyślij"
                            type="submit"
                            onClick={handleSubmit}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </form>
            {showModal && (
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="fixed  inset-0 bg-black bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center  sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3
                                                className="text-base font-semibold leading-6 text-gray-200"
                                                id="modal-title"
                                            >
                                                Dziękujemy za wiadomość!
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-100">
                                                    Skontaktujemy się wkrótce,
                                                    aby omówić szczegóły
                                                    projektu. <br />
                                                    Pozdrawiamy, Zespół WebNova
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-green-500 sm:ml-3  transition-all"
                                    >
                                        Ok
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactForm;
