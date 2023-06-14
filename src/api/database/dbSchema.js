const mongoose = require('mongoose');

// define a schema for the wallet model
const keySchema = new mongoose.Schema({
    publicKey: String,
    privateKey: String,
});

// define a schema for the email model
const emailSchema = new mongoose.Schema({
    email: String
});

// create email model using schema
const Email = mongoose.model('Email', emailSchema);

// create wallet model using schema
const Wallet = mongoose.model('Wallet', keySchema);

// Export the Email model to be used in other parts of the application
module.exports = {
    Email,
    Wallet,
};