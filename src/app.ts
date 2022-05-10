import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

mongoose
  .connect(process.env.MONGO_URL)
  .catch((err) => console.log(`DB: ${err}`));

export default app;