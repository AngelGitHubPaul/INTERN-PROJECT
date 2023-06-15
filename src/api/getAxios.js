import axios from 'axios';

// a client side function to fetch the data from the database
export async function fetchWallet() {
    try {
        const result = await axios.get('https://the-intern-project.vercel.app/api/keys');
        const responseData = result.data;
        // console.log('response', responseData);
        return responseData;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// a client side function to send a link to the user's email
export async function sendingEmail(email) {
    try {
        const result = await axios.post('https://the-intern-project.vercel.app/send-email', {
            email: email,
        });
        const responseData = result.data;
        console.log('SendingEmailResponse', responseData);
        return responseData;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// a client side function to fetch user email data from the database
export async function fetchEmail(email) {
    try {
        const result = await axios.get('https://the-intern-project.vercel.app/api/emails/' + email);
        const responseData = result.data;
        //console.log('FetchEmailResponse', responseData);
        return responseData;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// a client side function to save user email data to the database
export async function saveEmail(email) {
    try {
        const result = await axios.post('https://the-intern-project.vercel.app/api/emails', {
            email: email,
        });
        const responseData = result.data;
        console.log('SaveEmailResponse', responseData);
        return responseData;
    } catch (error) {
        console.log(error);
        return null;
    }
}