import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'; // Importing the auth routes
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

app.use('/api/auth', authRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });


// Start the server 

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});