import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// This is the component that will wrap our main logic
// to allow the use of hooks like useNavigate inside functions.
function AppContent() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate(); // Hook to programmatically navigate

  // useEffect to load initial data (simulating an API call)
  useEffect(() => {
    // In a real app, you would fetch this from a server.
    const initialContacts = [
      { id: 1, first_name: 'Kamal', last_name: 'Haasan', email: 'kamal@example.com', phone: '111-222-3333', address: 'Chennai, TN' },
      { id: 2, first_name: 'Rajinikanth', last_name: 'Sivaji', email: 'rajini@example.com', phone: '444-555-6666', address: 'Chennai, TN' }
    ];
    setContacts(initialContacts);
  }, []); // The empty array [] means this runs only once when the component mounts.

  // --- DELETE LOGIC ---
  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    toast.error('Contact Deleted Successfully!');
  };

  // --- ADD LOGIC ---
  const handleAddContact = (newContact) => {
    // Create a new ID (in a real app, the server would do this)
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    const contactToAdd = { ...newContact, id: newId };
    
    setContacts([...contacts, contactToAdd]);
    toast.success('Contact Added Successfully!');
    navigate('/'); // Navigate back to the home page
  };

  // --- EDIT LOGIC ---
  const handleEditContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    toast.info('Contact Updated Successfully!');
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="container mt-4">
      <Routes>
        {/* Pass contacts and the delete function to the Home page */}
        <Route 
          path="/" 
          element={<Home contacts={contacts} onDelete={handleDeleteContact} />} 
        />
        
        {/* Pass the add function to the AddContact page */}
        <Route 
          path="/add" 
          element={<AddContact onAdd={handleAddContact} />} 
        />
        
        {/* Pass all contacts (to find the one to edit) and the edit function */}
        <Route 
          path="/edit/:id" 
          element={<EditContact contacts={contacts} onEdit={handleEditContact} />} 
        />
      </Routes>
    </div>
  );
}


// The main App component now just sets up the Router and global components.
function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <Navbar />
      {/* The component with the state logic is rendered here */}
      <AppContent /> 
    </Router>
  );
}

export default App;