import { createTransport } from 'nodemailer';
import { config } from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';

const templatePath = join(__dirname, 'emailTem.html');
const htmlTemplate = readFileSync(templatePath, 'utf-8');

config();

function sendEmail(_email) {
    const transporter = createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: 'tripna3p@gmail.com',
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailConfig = {
        from: 'tripna3p@gmail.com',
        to: _email,
        subject: 'Sample Test Mailer',
        html: htmlTemplate,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailConfig, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                reject(error);
            } else {
                console.log('Email sent:', info.response);
                resolve(info);
            }
        });
    });
}

export default { sendEmail };