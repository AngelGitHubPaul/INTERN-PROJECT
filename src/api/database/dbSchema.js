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
export const Email = model('Email', emailSchema);

// create wallet model using schema
export const Wallet = model('Wallet', keySchema);