import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { name, email } = req.body;

        if (!name || !email) {
            res.status(400).json({ message: "Please fill in all fields" });
            return;
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                from: `${email}`,
                to: process.env.EMAIL_ADDRESS,
                subject: `Message from ${name} - ${email}`,
                html: `
                <p>From: ${name} - ${email}</p>
                `,
            });
            res.status(200).json({ message: "Message sent successfully!" });
        } catch (error: any) {
            console.log(error);

            res.status(500).json({ message: error.message });
        }
    }

    res.status(200).json({ message: "Message sent successfully!" });
}
