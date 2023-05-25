export const sendEmail = async (
	mailOptions = {
		to: 'emmanuelcalaycay17@gmail.com',
		subject: 'Email Subject',
		html: '<h1>Ligaw na Message</h1>'
	}
) =>
	(
		await fetch('/api/send-email', {
			method: 'POST',
			body: JSON.stringify({ mailOptions })
		})
	);