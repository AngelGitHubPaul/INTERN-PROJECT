import axios from 'axios';

let response = []; // Initialize response as an empty array

// a client side function to fetch the data in database
export async function fetchWallet() {
    try {
        const result = await axios.get('http://localhost:5000/api/keys');
        response = result.data; // Assign the fetched data to the response variable
        console.log('response', response);
    } catch (error) {
        console.log(error);
    }
}

// a client side function to fetch user email data in database
export async function fetchEmail(_email) {
    const email = _email;
    try {
        const result = await axios.get('http://localhost:5000/api/emails/${email}');
        response = result.data; // Assign the fetched data to the response variable
        console.log('response', response);
    } catch (error) {
        console.log(error);
    }
}

// a client side function to save user email data to the database
export async function saveEmail(_email) {
    const email = _email;
    try {
        const result = await axios.post('http://localhost:5000/api/emails}', {
            email: email
        });
        response = result.data; // Assign the fetched data to the response variable
        console.log('response', response);
    } catch (error) {
        console.log(error);
    }
}

export default response;
