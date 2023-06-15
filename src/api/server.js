const express = require('express')
const cors = require('cors');
const router = require('./routes');
const { connectToDatabase } = require('../api/database/connect');

const PORT = process.env.PORT || 3000 ;
const app = express();

app.use(express.json());
app.use(cors());

app.use(router);
connectToDatabase();

// start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;