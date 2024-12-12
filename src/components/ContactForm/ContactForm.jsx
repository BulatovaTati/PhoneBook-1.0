import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import ErrorText from './ErrorText/ErrorText';
import s from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.number().min(3, 'Too Short!').required('Required').typeError('It should be a number'),
});

const ContactForm = ({ contacts, onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInclude) {
      iziToast.warning({
        position: 'topRight',
        title: 'Wow',
        message: `${values.name} is already in your contacts`,
      });

      resetForm();
      return;
    }

    values.id = nanoid(7);
    onAdd(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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

ContactForm.propTypes = {
  onAdd: PropTypes.func,
  contacts: PropTypes.array,
};

export default ContactForm;
