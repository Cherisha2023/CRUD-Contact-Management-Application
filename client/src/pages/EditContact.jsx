import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import contactService from '../services/api';
import { toast } from 'react-toastify';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const contact = await contactService.getContact(id);

        // Ensure all expected fields are present
        const formattedContact = {
          firstName: contact.first_name || '',
          lastName: contact.last_name || '',
          email: contact.email || '',
          phone: contact.phone || '',
          address: contact.address || ''
        };

        setInitialValues(formattedContact);
      } catch (error) {
        toast.error('Failed to load contact');
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContact();
  }, [id, navigate]);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      await contactService.updateContact(id, values);
      toast.success('Contact updated successfully!');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to update contact');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!initialValues) return <div>Contact not found</div>;

  return (
    <div>
      <h2>Edit Contact</h2>
      <ContactForm 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonText={isSubmitting ? 'Updating...' : 'Update Contact'}
      />
    </div>
  );
};

export default EditContact;
