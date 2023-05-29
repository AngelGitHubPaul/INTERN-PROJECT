const mongoose = require('mongoose');

// define a schema for the wallet model
const keySchema = new mongoose.Schema({
    publicKey: String,
    privateKey: String,
});

// create wallet model using schema
const Wallet = mongoose.model('Wallet', keySchema);

// Export the Wallet model to be used in other parts of the application
module.exports = Wallet; 