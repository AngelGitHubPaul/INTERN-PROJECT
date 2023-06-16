import express, { json } from 'express';
import cors from 'cors';
import router from './routes';
import { connectToDatabase } from '../api/database/connect';

const PORT = process.env.PORT || 3000 ;
const app = express();

app.use(json());
app.use(cors());

app.use(router);
connectToDatabase();

// start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

export default app;