import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ContactForm from '../components/ContactForm';
import contactService from '../services/api';
import { Container, Card, Breadcrumb, Spinner } from 'react-bootstrap';
import { PersonPlus, ArrowLeft } from 'react-bootstrap-icons';

const AddContact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: ''
  };

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      await contactService.createContact(values);
      toast.success('Contact added successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      resetForm();
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         'Failed to add contact';
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-4">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs="button" onClick={() => navigate('/')}>
          <ArrowLeft size={16} className="me-1" />
          Contacts
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Add New</Breadcrumb.Item>
      </Breadcrumb>

      {/* Main Card */}
      <Card className="shadow-sm border-0">
        <Card.Header className="bg-white border-bottom-0 pb-0">
          <div className="d-flex align-items-center">
            <PersonPlus size={24} className="text-primary me-2" />
            <h2 className="mb-0">Add New Contact</h2>
          </div>
          <p className="text-muted mt-2">Fill in the details below to create a new contact</p>
        </Card.Header>
        
        <Card.Body className="pt-1">
          <ContactForm 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            buttonText={
              isSubmitting ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Adding...
                </>
              ) : (
                <>
                  <PersonPlus size={16} className="me-2" />
                  Add Contact
                </>
              )
            }
            isSubmitting={isSubmitting}
          />
        </Card.Body>
        
        <Card.Footer className="bg-white border-top-0 text-muted small">
          <div className="d-flex justify-content-between">
            <span>All fields are required</span>
            <span>ID will be auto-generated</span>
          </div>
        </Card.Footer>
      </Card>

      {/* Custom Styles */}
      <style jsx>{`
        .card {
          border-radius: 12px;
          overflow: hidden;
        }
        
        .breadcrumb {
          background-color: transparent;
          padding: 0;
        }
        
        .breadcrumb-item button {
          background: none;
          border: none;
          color: #0d6efd;
          cursor: pointer;
          padding: 0;
        }
        
        .breadcrumb-item button:hover {
          text-decoration: underline;
        }
      `}</style>
    </Container>
  );
};

export default AddContact;