import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Header } from 'components/Header/Header';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <>
      <div className={css.container}>
        <Header />
        <h1 className={css.title}> Contacts</h1>
        <div className={css.wrapper}>
          <ContactForm />
          <div className={css.scrollbar}> 
            <Filter />
            
            <ContactList />
            
          </div>
        </div>
      </div>
    </>
  );
}
