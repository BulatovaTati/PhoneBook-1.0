import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import ErrorText from './ErrorText/ErrorText';
import { validationSchemaContactForm } from '../validationsForm';
import s from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaContactForm}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={s.form}>
        <div className={s.formGroup}>
          <label htmlFor="name" className={s.formLabel}>
            Name
          </label>
          <Field
            className={s.formInput}
            id="name"
            type="text"
            name="name"
            placeholder="Enter contact name"
            title="Name may contain only letters, apostrophe, dash and spaces. 
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorText name="name" />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="number" className={s.formLabel}>
            Number
          </label>
          <Field
            className={s.formInput}
            id="number"
            type="tel"
            name="number"
            placeholder="Enter contact phone number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorText name="number" />
        </div>
        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
