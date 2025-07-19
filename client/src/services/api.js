import axios from 'axios';

const API_URL = 'https://crud-contact-management-application-2.onrender.com';

// GET all contacts
export const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// GET single contact by ID
export const getContact = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// POST create new contact
export const createContact = async (contactData) => {
  const response = await axios.post(API_URL, contactData);
  return response.data;
};

// PUT update existing contact
export const updateContact = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

// DELETE contact
export const deleteContact = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// ✅ Export everything as a single default object
export default {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
