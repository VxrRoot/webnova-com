import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const regex = {
        name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/u,
        mail: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        message:
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{4,}$/u,
    };

    if (req.method === "POST") {
        const { name, mail, consent, message } = req.body;

        if (
            !regex.name.test(name) ||
            !regex.mail.test(mail) ||
            !consent ||
            !regex.message.test(message)
        ) {
            res.status(400).json({
                status: 400,
                message: "Please fill correct all fields",
            });
            return;
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: `Message from ${name} - ${mail}`,
                html: `
                <p>From: ${name} - ${mail}</p>
                <p>Zgoda na przetwarzanie danych osobowych: ${
                    consent ? "tak" : "nie"
                }</p>
                <p>Message: ${message}</p>
                `,
            });
            res.status(200).json({
                status: 200,
                message: "Message sent successfully!",
            });
        } catch (error: any) {
            res.status(500).json({ status: 500, message: error.message });
        }
    }
}
