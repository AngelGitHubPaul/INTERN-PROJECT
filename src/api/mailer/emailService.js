const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

function sendEmail() {
    const transporter = nodemailer.createTransport({
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
        to: 'yepilon991@pgobo.com',
        subject: 'Test Mailer',
        text: 'This is a test email from Nodemailer.',
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

module.exports = { sendEmail };