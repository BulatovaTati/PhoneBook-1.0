import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Title from './Title/Title';
import initContacts from '../assets/contactData.json';
import s from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [newContact, ...prevContacts];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Title>Phonebook</Title>
      <div className={s.container}>
        <ContactForm contacts={contacts} onAdd={addContact} />
        <SearchBox value={filter} onSearch={setFilter} />
      </div>
      {filteredContacts.length ? (
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      ) : (
        <p className={s.noContact}>No contact in your list</p>
      )}
    </>
  );
};

export default App;
