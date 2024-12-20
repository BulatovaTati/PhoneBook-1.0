import PropTypes from 'prop-types';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';
import customToast from '../ErrorMessage/ToastMessage';

const SearchBar = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      customToast('warn', 'Oops... Enter the title');
      return;
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
      <Toaster />
    </section>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

export default SearchBar;
