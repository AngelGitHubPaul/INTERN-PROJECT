import nodemailer from 'nodemailer';
import { dotenv } from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tripna3p@gmail.com',
        pass: process.env.SMTP_PASS
    }
});

const mailConfig = {
    from: 'tripna3p@gmail.com',
    to: 'yepilon991@pgobo.com',
    subject: 'Test Mailer',
    text: 'This is a test email from Nodemailer.'
};
