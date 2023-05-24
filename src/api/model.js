const mongoose = require("mongoose");

const keySchema = new mongoose.Schema({
    publicKey: String,
    privateKey: String,
});

const Wallet = mongoose.model('Wallet', keySchema);

module.exports = Wallet;