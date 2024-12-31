import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from '../../redux/contacts/selectors';
import Contact from './Contact/Contact';
import Notification from '../Notification/Notification';
import s from './ContactList.module.css';
import EditContactModal from '../Modals/EditContactModal/EditContactModal';
import { useState } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleEditClick = contact => {
    setSelectedContact(contact);
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
    setSelectedContact(null);
  };
  return (
    <>
      {isLoading || contacts.length === 0 ? (
        <Notification>Contact list is empty</Notification>
      ) : (
        <ul className={s.contactList}>
          {contacts.map(contact => (
            <li key={contact.id} className={s.contactItem}>
              <Contact contact={contact} onEditClick={handleEditClick} />
            </li>
          ))}
        </ul>
      )}
      {selectedContact && (
        <EditContactModal
          isOpen={isEditModalOpen}
          onClose={handleCloseModal}
          contact={selectedContact}
        />
      )}
    </>
  );
};

export default ContactList;
