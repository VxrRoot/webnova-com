interface ContactFormData {
    name: string;
    mail: string;
    message: string;
    consent: boolean;
}

export const sendContactForm = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });
    return res.json();
};
