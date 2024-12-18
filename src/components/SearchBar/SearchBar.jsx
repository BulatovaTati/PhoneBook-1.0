import PropTypes from 'prop-types';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import s from './Searchbar.module.css';

const Searchbar = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return console.warn('Oops... Enter the title');
    }

    onChange(query);
    setQuery('');
  };

  return (
    <section className={s.movies}>
      <div className="container">
        <form className={s.searchForm} onSubmit={handleSubmit}>
          <input
            className={s.searchInput}
            type="text"
            name="query"
            value={query}
            onChange={e => setQuery(e.target.value.toLowerCase())}
          />
          <button type="submit" className={s.searchBtn}>
            <FcSearch size={24} />
          </button>
        </form>
      </div>
    </section>
  );
};

Searchbar.propTypes = {
  onChange: PropTypes.func,
};

export default Searchbar;
