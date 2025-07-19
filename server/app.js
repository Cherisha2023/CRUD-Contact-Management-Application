import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contacts.js';

const app = express();

// ✅ Apply CORS middleware first
app.use(cors({
  origin: 'https://crud-contact-management-application-orcin.vercel.app',
  credentials: true,
}));


// ✅ Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API routes
app.use('/api/contacts', contactRoutes);

export default app;
