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

export default response;
