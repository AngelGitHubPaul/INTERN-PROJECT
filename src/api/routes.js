const express = require('express');
const { Wallet, Email } = require('./database/dbSchema');
const { sendEmail } = require('./mailer/emailService');

// Create an instance of the Express router:
const router = express.Router();

// Get request route to fetch all wallet data
router.get('/api/keys', async (req, res) => {
  try {
    const wallet = await Wallet.find();
    res.json(wallet);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving wallet data');
  }
});

// Post request to save wallet data to database
router.post('/api/keys', async (req, res) => {
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

// Post request to send email
router.post('/send-email', async (req, res) => {
  const { email } = req.body;
  try {
    // call the sendEmail function
    const emailStatus = await sendEmail(email);
    res.status(200).json({ emailStatus, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).send({ error: 'Failed to send email' });
  }
});

// Get request route to fetch user email
router.get('/api/emails/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const userEmail = await Email.find({ email: email });
    res.json(userEmail);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user email data');
  }
});

// Post request to save user email data to database
router.post('/api/emails', async (req, res) => {
  // POST request
  const { email } = req.body;

  try {
    // Create a new instance of the email model with the provided data
    const emails = new Email({
      email: email,
    });

    // Save the email data to the database
    const savedEmail = await emails.save();

    // Create a response object with the saved email data
    const responseData = {
      email: savedEmail.email,
      message: 'Data saved successfully',
    };

    // Send the response as JSON
    res.json(responseData);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;