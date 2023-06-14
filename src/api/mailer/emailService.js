const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'emailTem.html');
const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

dotenv.config();

function sendEmail(_email) {
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

module.exports = { sendEmail };