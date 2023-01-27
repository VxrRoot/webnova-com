import nodemailer from "nodemailer";

console.log(process.env.EMAIL_PASS);

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
    },
});

export const mailOptions = {
    //     from: process.env.EMAIL_ADDRESS,
    //     to: process.env.EMAIL_ADDRESS,
};
