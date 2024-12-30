import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Title from '../components/Title/Title';
import Loader from '../components/Loader/Loader';

import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';

const ContactPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Title>Phonebook</Title>
      <ContactForm />
      <SearchBox />
      <Title level={2} fontSize={20}>
        Contacts
      </Title>
      {isLoading && !error && <Loader />}
      {!isLoading && <ContactList />}
    </>
  );
};

export default ContactPage;
