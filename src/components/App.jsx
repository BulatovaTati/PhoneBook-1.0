import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Title from './Title/Title';
import s from './App.module.css';

const App = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <div className={s.container}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </>
  );
};

export default App;
