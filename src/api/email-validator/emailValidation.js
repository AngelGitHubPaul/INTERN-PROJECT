import { fetchEmail, saveEmail, sendingEmail } from '../getAxios.js';

// function to validate if the email input of use has aldreay minted on the site once or not
export async function validateEmail(_email) {
    try {
        // look for user input in the db
        const emailData = await fetchEmail(_email);
        // checks if user input is found in db
        if (emailData.length == 0 || emailData[0].email != _email) {
            try {
                // saves user input to database
                await saveEmail(_email);
                await sendingEmail(_email);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("user already have minted once");
        }
    } catch (error) {
        console.log(error);
    }
}