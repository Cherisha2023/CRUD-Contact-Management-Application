import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../components/ContactList';
import contactService from '../services/api';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await contactService.getContacts();
        setContacts(data);
      } catch (error) {
        toast.error('Failed to load contacts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
  if (window.confirm('Are you sure you want to delete this contact?')) {
    try {
      await contactService.deleteContact(id);
      setContacts(contacts.filter(contact => contact.id !== id)); // ✅ Fixed
      toast.success('Contact deleted successfully');
    } catch (error) {
      toast.error('Failed to delete contact');
    }
  }
};


  if (isLoading) return <div>Loading contacts...</div>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Contacts</h1>
        <Button as={Link} to="/add" variant="primary">
          Add Contact
        </Button>
      </div>
      {contacts.length === 0 ? (
        <p>No contacts found. Add your first contact!</p>
      ) : (
        <ContactList contacts={contacts} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;