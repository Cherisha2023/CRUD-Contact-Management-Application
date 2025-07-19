import { Table, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PersonCircle, Envelope, Telephone, GeoAlt, Pencil, Trash } from 'react-bootstrap-icons';

const ContactList = ({ contacts, onDelete }) => {
  // Function to generate avatar color based on name
  const getAvatarColor = (name) => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="contact-list-container">
      <Table hover responsive className="contact-table">
        <thead className="table-header">
          <tr>
            <th>Contact</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => {
              const fullName = `${contact.first_name} ${contact.last_name}`;
              const initials = `${contact.first_name?.[0] || ''}${contact.last_name?.[0] || ''}`;
              const avatarColor = getAvatarColor(fullName);

              return (
                <tr key={contact.id} className="contact-row">
                  <td className="contact-avatar-cell">
                    <div className="d-flex align-items-center">
                      <Badge 
                        pill 
                        bg={avatarColor} 
                        className="avatar-badge me-3"
                      >
                        {initials}
                      </Badge>
                      <div>
                        <h6 className="mb-0">{fullName}</h6>
                        <small className="text-muted">ID: {contact.id}</small>
                      </div>
                    </div>
                  </td>
                  <td className="contact-details-cell">
                    <div className="contact-detail-item">
                      <Envelope className="me-2 text-primary" />
                      <span>{contact.email}</span>
                    </div>
                    <div className="contact-detail-item">
                      <Telephone className="me-2 text-success" />
                      <span>{contact.phone}</span>
                    </div>
                    {contact.address && (
                      <div className="contact-detail-item">
                        <GeoAlt className="me-2 text-warning" />
                        <span>{contact.address}</span>
                      </div>
                    )}
                  </td>
                  <td className="contact-actions-cell">
                    <div className="d-flex gap-2">
                      <Link 
                        to={`/edit/${contact.id}`} 
                        className="btn btn-sm btn-outline-primary d-flex align-items-center"
                        title="Edit"
                      >
                        <Pencil size={14} className="me-1" />
                        Edit
                      </Link>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => onDelete(contact.id)}
                        className="d-flex align-items-center"
                        title="Delete"
                      >
                        <Trash size={14} className="me-1" />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                <div className="text-muted">No contacts found</div>
                <Link to="/add" className="btn btn-primary mt-3">
                  Add Your First Contact
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <style jsx>{`
        .contact-list-container {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        
        .table-header {
          background-color: #f8f9fa;
        }
        
        .contact-table th {
          padding: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
        }
        
        .contact-row td {
          padding: 1rem;
          vertical-align: middle;
          border-top: 1px solid #f1f1f1;
        }
        
        .avatar-badge {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: bold;
        }
        
        .contact-detail-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .contact-detail-item:last-child {
          margin-bottom: 0;
        }
        
        .contact-row:hover {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactList;