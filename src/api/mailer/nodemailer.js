// import {nodemailer} from "nodemailer"
//   // send mail with defined transport object
// export async function sendEmail(
//     // mailOptions={
//     //     to: 'emmanuelcalaycay17@gmail.com',
//     //     subject: 'Email Subject',
//     //     html: '<h1>Ligaw na Message</h1>'
//     // }
// ) { 
    
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'unitedbayanihan.bars@gmail.com',
//             pass: 'jsjnkhqimgoutqiq'
//         }
//     });
//     const mailInfo = transporter.sendMail({
//         to: 'emmanuelcalaycay17@gmail.com',
//         subject: 'Email Subject',
//         html: '<h1>Ligaw na Message</h1>'
//     });

//     console.log("Message Sent: " + info.messageId);
// }

//   export const sendEmail = async (
// 	mailOptions = {
// 		to: 'emmanuelcalaycay17@gmail.com',
// 		subject: 'Email Subject',
// 		html: '<h1>Ligaw na Message</h1>'
// 	}
// ) =>
// 	await (
// 		await fetch('/api/send-email', {
// 			method: 'POST',
// 			body: JSON.stringify({ mailOptions })
// 		})
// 	).json();

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'unitedbayanihan.bars@gmail.com',
		pass: 'jsjnkhqimgoutqiq'
	}
});

async function sendEmail(mailOptions) {
	try {
		return await transporter.sendMail(mailOptions);
	} catch (err) {
		console.log(err);
		throw 'error in sending email: ' + err;
	}
}

export async function POST({ request }) {
	try {
		if (!request.body) throw 'please use send a body with your request';
		const { mailOptions } = await request.json();
		if (!mailOptions) throw 'Please send mailOptions in your body tag';
		const { to, subject, html } = mailOptions;
		if (!to || !subject || !html) throw 'please use proper mailOptions object';
		const result = await sendEmail(mailOptions);
		return json({
			message: 'POST SUCCESS',
			result
		});
	} catch (err) {
		console.log(err);
	}
}