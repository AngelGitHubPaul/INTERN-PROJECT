import { fetchEmail, saveEmail, sendingEmail } from '../getAxios.js';

// function to validate if the email input of client has already minted on the site or not
export async function validateEmail(email) {
    try {
        const emailData = await fetchEmail(email);
        if (emailData.length === 0 || emailData[0].email !== email) {
            await saveEmail(email);
            await sendingEmail(email);
            return true;
        } else {
            alert("User has already minted once");
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}
