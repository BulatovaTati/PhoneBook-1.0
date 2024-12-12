import PropTypes from 'prop-types';
import Title from '../Title/Title';

const SearchBox = ({ value, onSearch }) => {
  return (
    <>
      <Title level={2}>Find contacts by name</Title>
      <input type="text" value={value} onChange={e => onSearch(e.target.value)} />
    </>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSearch: PropTypes.func,
  value: PropTypes.string,
};
