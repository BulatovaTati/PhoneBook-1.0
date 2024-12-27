import { useDispatch, useSelector } from 'react-redux';
import Title from '../Title/Title';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleFilterChange = value => dispatch(changeFilter(value));

  return (
    <div>
      <Title level={2} fontSize={20}>
        Find contacts by name
      </Title>
      <input
        className={s.searchInput}
        type="text"
        name="filter"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
