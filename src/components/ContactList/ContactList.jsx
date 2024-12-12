import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import Notification from '../Notification/Notification';
import Title from '../Title/Title';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
