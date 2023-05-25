const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const Wallet = require('./model');
const dotenv = require('dotenv');

dotenv.config();

const mongoURI = process.env.VITE_DB_URI;
const PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to Database Successfully");
    })
    .catch((error) => {
        console.log(error);
    });

// define routes
app.get('/api/keys', async (req, res) => {
    // GET request
    try {
        // Get all wallet documents from Mongodb Collection
        const wallet = await Wallet.find();
        res.json(wallet);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving wallet data');
    }
});
app.post('/api/keys', async (req, res) => {
    // POST request
    const { publicKey, privateKey } = req.body;

    const wallet = new Wallet({
        publicKey: publicKey,
        privateKey: privateKey,
    });

    try {
        await wallet.save();
        // Create a response object with the saved wallet data
        const responseData = {
            publicKey: wallet.publicKey,
            privateKey: wallet.privateKey,
            message: 'Sample response data',
        };
        // Send the response as JSON
        res.json(responseData);
        // res.send(wallet);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

// start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});