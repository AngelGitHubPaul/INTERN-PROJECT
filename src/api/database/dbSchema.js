import { Schema, model } from 'mongoose';

// define a schema for the wallet model
const keySchema = new Schema({
    publicKey: String,
    privateKey: String,
});

// define a schema for the email model
const emailSchema = new Schema({
    email: String
});

// create email model using schema
const Email = model('Email', emailSchema);

// create wallet model using schema
const Wallet = model('Wallet', keySchema);

// Export the Email model to be used in other parts of the application
export default {
    Email,
    Wallet,
};