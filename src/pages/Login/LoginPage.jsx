import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    dispatch(logIn(user));
    event.target.reset();
  };
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formlabel}>Email </label>
        <input
          className={css.formemail}
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="on"
          required
        />
        <label className={css.formlabel}>Password</label>
        <input
          className={css.formpassword}
          type="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="on"
          required
        />
        <button className={css.formbtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
