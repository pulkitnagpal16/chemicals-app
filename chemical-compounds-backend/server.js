import express from 'express';
import routes from './routes/index.js';
import Compound from './models.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

Compound.sync();

app.use(express.json()); // Parse JSON requests
app.use('/', routes); // Use the API routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
