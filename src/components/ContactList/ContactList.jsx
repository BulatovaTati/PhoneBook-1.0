import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import Notification from '../Notification/Notification';
import Title from '../Title/Title';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <Title level={2} fontSize={20}>
        Contacts
      </Title>
      {contacts.length > 0 ? (
        <ul className={s.contactList}>
          {contacts.map(contact => (
            <li key={contact.id} className={s.contactItem}>
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

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
