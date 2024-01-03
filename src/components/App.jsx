// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from '../redux/operations';
import { getContact, getFilterWord } from '../redux/selectors';
import { useEffect } from 'react';
import { filterContacts } from '../redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filterName = useSelector(getFilterWord);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilter = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContacts(value));
  };

  const getFilterContact = () => {
    if (!filterName) {
      return contacts;
    }
    const normalaizedFilter = filterName.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };

  return (
    <div className={css.form}>
      <h1 className={css.title}>Phonebook</h1>
      <Section>
        <ContactForm />
      </Section>
      <Section>
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filterName} onChange={handleFilter} />
        <div className={css.scrollbar}>
          <ContactList contacts={getFilterContact()} />
        </div>
      </Section>
      <ToastContainer />
    </div>
  );
};
