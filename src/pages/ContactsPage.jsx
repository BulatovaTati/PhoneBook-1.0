import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Title from '../components/Title/Title';
import Loader from '../components/Loader/Loader';

import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import Pagination from '../components/Pagination/Pagination.jsx';

const ContactPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts({ page }));
  }, [page, dispatch]);

  const handlePageChange = selectedPage => {
    dispatch(fetchContacts({ page: selectedPage }));
  };

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
      {contacts.length > 0 && totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </>
  );
};

export default ContactPage;
