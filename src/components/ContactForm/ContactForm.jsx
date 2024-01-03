import css from './ContactForm.module.css';
import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getContact } from '../../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const isContactExist = () => {
    return contacts.some(
      contact =>
        contact.name.toLowerCase() === formData.name.toLowerCase() ||
        contact.number === formData.number
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isContactExist()) {
      return toast.warn(`${formData.name} is already in contacts`);
    }

    const newContact = {
      // id: nanoid(),
      name: formData.name,
      number: formData.number,
    };

    dispatch(addContact(newContact));

    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={css.card}>
      <label className={css.ttitle}>
        Name
        <input
          className={css.input}
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label className={css.ttitle}>
        Number
        <input
          className={css.input}
          placeholder="Phone number"
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          required
        />
      </label>

      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
  );
};
