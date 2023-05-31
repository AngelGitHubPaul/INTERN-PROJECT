const mongoose = require('mongoose');
const dotenv  = require('dotenv');

dotenv.config();
const mongoURI = process.env.VITE_DB_URI;

// connect to mongodb atlas database
async function connectToDatabase() {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to Database Successfully !!!");
    } catch (error) {
        console.log(error);
    }
}
module.exports = { connectToDatabase };