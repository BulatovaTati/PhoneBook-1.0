import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Title from './Title/Title';
import s from './App.module.css';
import { selectError, selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/contactsOps';
import Loader from './Loader/Loader';

const App = () => {
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

export default App;
