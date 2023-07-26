import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import commentRoutes from './routes/comments.js';
import videoRoutes from './routes/videos.js';

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log('Connect to DB');
    })
    .catch((err) => {
      throw err;
    });
};

app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/video', videoRoutes);

app.listen(8800, () => {
  connect();
  console.log('Connected to the server');
});
