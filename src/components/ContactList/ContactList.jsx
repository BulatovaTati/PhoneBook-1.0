import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from './Contact/Contact';
import Notification from '../Notification/Notification';
import Title from '../Title/Title';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = () =>
    contacts.filter(contact => contact?.name.toLowerCase().includes(filter?.toLowerCase() || ''));

  const filteredContacts = visibleContacts();

  return (
    <>
      <Title level={2} fontSize={20}>
        Contacts
      </Title>
      {filteredContacts.length > 0 ? (
        <ul className={s.contactList}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={s.contactItem}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <Notification>Contact list is empty</Notification>
      )}
    </>
  );
};

export default ContactList;
