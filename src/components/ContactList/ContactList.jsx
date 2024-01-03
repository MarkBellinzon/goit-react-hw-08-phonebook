import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  return (
    <>
      <ul className={css.it}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.text}>
           {contact.name}: {contact.number}
            <button
            className={css.delBtn}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};