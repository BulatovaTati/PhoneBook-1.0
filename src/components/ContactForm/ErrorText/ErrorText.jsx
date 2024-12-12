import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import s from './ErrorText.module.css';

const formError = ({ name }) => {
  return <ErrorMessage name={name} component="p" className={s.formError} />;
};

formError.propTypes = {
  name: PropTypes.string,
};

export default formError;
