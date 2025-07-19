import express from 'express';
import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/', createContact);// ✅ Now this works
router.get('/:id', getContactById);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router; // ✅ Make sure this line exists
