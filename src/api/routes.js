const express = require('express');
const Schema = require('./database/dbSchema');
const { sendEmail } = require('./mailer/emailService');
const Email = require('./database/dbSchema');

// Create an instance of the Express router:
const router = express.Router();

// Post request to send email
router.post('/send-email', async (req, res) => {
  try {
    // call the sendEmail function 
    await sendEmail();
    // return success message
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).send({ error: 'Failed to send email' });
  }
});

// Get request route to fetch all wallet data
router.get('/api/keys', async (req, res) => {
  try {
    const wallet = await Schema.wallet.find();
    res.json(wallet);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving wallet data');
  }
});

// Post request to save wallet data to database
router.post('/api/keys', async (req, res) => {
  // POST request
  const { publicKey, privateKey } = req.body;

  try {
    // Create a new instance of the Wallet model with the provided data
    const wallet = new Wallet({
      publicKey: publicKey,
      privateKey: privateKey,
    });

    // Save the wallet data to the database
    const savedWallet = await wallet.save();

    // Create a response object with the saved wallet data
    const responseData = {
      publicKey: savedWallet.publicKey,
      privateKey: savedWallet.privateKey,
      message: 'Data saved successfully',
    };

    // Send the response as JSON
    res.json(responseData);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Get request route to fetch user email
router.get('/api/emails/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const userEmail = await Schema.email.find({"email": email});
    res.json(userEmail);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user email data');
  }
});

module.exports = router;