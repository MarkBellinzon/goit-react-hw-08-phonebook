import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/operations';
import { PrivateRoute } from './PrivetRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader/Loader';
import Layout from './Layout';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/Registration/RegistrationPage'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
}
