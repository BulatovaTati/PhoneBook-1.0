import { useDispatch, useSelector } from 'react-redux';
import Title from '../Title/Title';
import s from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div>
      <Title level={2} fontSize={20}>
        Find contacts by name
      </Title>
      <input
        className={s.searchInput}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
