import * as Contact from '../models/Contact.js';

export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address } = req.body;
    const newContact = await Contact.createContact(firstName, lastName, email, phone, address);
    res.status(201).json(newContact);
  } catch (error) {
    console.error('Error creating contact:', error.message);
    res.status(500).json({ error: 'Failed to create contact' });
  }
};


export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.getContactById(id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    console.error('Error fetching contact:', error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phone, address } = req.body;
    const updated = await Contact.updateContact(id, firstName, lastName, email, phone, address);
    if (!updated) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating contact:', error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.deleteContact(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Contact not found or already deleted' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error.message);
    res.status(500).json({ error: error.message });
  }
};
