import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import Title from '../Title/Title';
import s from './SearchBox.module.css';

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
        name="nameFilter"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
        placeholder="Search by name or phone"
      />
    </div>
  );
};

export default SearchBox;
