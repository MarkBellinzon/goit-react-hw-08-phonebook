import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(user);
    dispatch(register(user));
    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formlabel}>Name </label>
      <input
        className={css.formemail}
        type="text"
        name="name"
        placeholder="Henry Cross"
        autoComplete="on"
        required
      />
      <label className={css.loginFormLabel}>Email </label>
      <input
        className={css.loginFormEmail}
        type="email"
        name="email"
        placeholder="across@mail.com"
        autoComplete="on"
        required
      />
      <label className={css.formlabel}>Password</label>
      <input
        className={css.formpassword}
        type="password"
        name="password"
        placeholder="examplepwd12345"
        autoComplete="on"
        required
      />
      <button className={css.formbtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegistrationPage;
