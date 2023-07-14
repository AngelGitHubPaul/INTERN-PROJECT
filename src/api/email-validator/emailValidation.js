import { fetchEmail, saveEmail, sendingEmail } from '../getAxios.js';
import { SHA256 } from 'crypto-js';

// function to validate if the email input of client has already minted on the site or not
export async function validateEmail(Email) {
    try {
        const hashEmail = SHA256(Email).toString();
        const emailData = await fetchEmail(hashEmail);
        if (emailData.length === 0 || emailData[0].email !== hashEmail) {
            await saveEmail(hashEmail);
            await sendingEmail(Email);
            return true;
        } else if(emailData[0].claimed == false) {
            await sendingEmail(Email);
            return true;
        } else if(emailData[0].claimed == true) {
            return false;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}
