import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { logRoutes }from './routes/logRoutes.js';


const app = express();


connectDB();

app.use(cors());
app.use(express.json());


app.use('/api/logs',logRoutes);
