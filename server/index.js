import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contact.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const CONNECTION_URL = 'mongodb://localhost:27017/test';
const PORT = process.env.PORT || 5000;

app.use('/api/contact-sent', contactRoutes);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log('Error:', error.message));
