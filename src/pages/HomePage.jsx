import Title from '../components/Title/Title';
import s from '../styles/pages/HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <section className={s.homeSection}>
        <div className="container">
          <Title>
            {'Welcome to your Phonebook App 🙌. Please Sign up ✌ or Log ✔ in to get started.'}
          </Title>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
