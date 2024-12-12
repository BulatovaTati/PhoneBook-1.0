import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes, { number } from 'prop-types';
import iziToast from 'izitoast';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const validationSchema = yup.object({
  name: yup.string().min(3).max(50).required('Please write down some name'),
  number: yup.number().required(),
});

const ContactForm = ({ contacts, onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInclude) {
      return iziToast.warning({
        title: 'Wow',
        message: `${values.name} is already in contacts`,
      });
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
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
            id="name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. 
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="p" />
        </label>

        <label htmlFor="number">
          Number
          <Field
            id="number"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component="p" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onAdd: PropTypes.func,
  contacts: PropTypes.array,
};
