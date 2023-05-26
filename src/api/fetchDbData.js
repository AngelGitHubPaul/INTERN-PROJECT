import axios from 'axios';

let response = []; // Initialize response as an empty array

export async function fetchWallet() {
    try {
        const result = await axios.get('http://localhost:4000/api/keys');
        response = result.data; // Assign the fetched data to the response variable
        console.log('response', response);
    } catch (error) {
        console.log(error);
    }
}

export default response;
