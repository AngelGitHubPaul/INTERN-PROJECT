import CryptoJS from 'crypto-js';
import { ethers } from 'ethers';

// Generate new wallet
const wallet = ethers.Wallet.createRandom();

// Obtain the public key and Private key (unencrypted)
export const publicKey = wallet.publicKey;
const privateKey = wallet.privateKey;

// encrypt Private Key to be use for saving NFT trasfer (Task 4)
const encryptionKey = CryptoJS.lib.WordArray.random(32).toString();
const encryptedPrivateKey = encryptPrivateKey(privateKey, encryptionKey);

// encrypt using AES encryption
function encryptPrivateKey(privateKey, encryptionKey) {
    const encrypted = CryptoJS.AES.encrypt(privateKey, encryptionKey).toString();
    return encrypted;
}