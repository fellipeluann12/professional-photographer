import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contact.js';
import projectRoutes from './routes/project.js';

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(cors());

const CONNECTION_URL = 'mongodb://localhost:27017/test1';
const PORT = process.env.PORT || 5000;

app.use('/api/contact-sent', contactRoutes);
app.use('/api', projectRoutes);

mongoose.set('strictQuery', false);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(PORT, () => `Server running on port: ${PORT}`))
  .catch((error) => ('Error:', error.message));
