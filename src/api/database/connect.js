import { connect } from 'mongoose';
import { config } from 'dotenv';

config();
const mongoURI = process.env.VITE_DB_URI;

// connect to mongodb atlas database
async function connectToDatabase() {
    try {
        await connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to Database Successfully !!!");
    } catch (error) {
        console.log(error);
    }
}
export default { connectToDatabase };