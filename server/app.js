import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contacts.js';

const app = express();

// ✅ Apply CORS middleware first
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// ✅ Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API routes
app.use('/api/contacts', contactRoutes);

export default app;
