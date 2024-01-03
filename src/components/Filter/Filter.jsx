import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={css.text}>
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={showFilteredContacts}
          className={css.input}
        />
      </label>
    </div>
  );
};