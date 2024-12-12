import PropTypes from 'prop-types';
import Title from '../Title/Title';
import s from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <Title level={2} fontSize={20}>
        Find contacts by name
      </Title>
      <input
        className={s.searchInput}
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSearch: PropTypes.func,
  value: PropTypes.string,
};
