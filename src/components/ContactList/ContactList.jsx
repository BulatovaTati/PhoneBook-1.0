import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from '../../redux/selectors';
import Contact from './Contact/Contact';
import Notification from '../Notification/Notification';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading || contacts.length === 0 ? (
        <Notification>Contact list is empty</Notification>
      ) : (
        <ul className={s.contactList}>
          {contacts.map(contact => (
            <li key={contact.id} className={s.contactItem}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
