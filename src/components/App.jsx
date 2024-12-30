import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from './Pages/Layout/Layout';
import PrivateRoute from './Auth/PrivateRoute';
import RestrictedRoute from './Auth/RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { selectIsFetching } from '../redux/auth/selectors';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetching);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
