import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import ErrorText from './ErrorText/ErrorText';
import { validationSchemaContactForm } from '../validationsForm';
import s from './ContactForm.module.css';

const initialValues = {
  name: '',
  phoneNumber: '',
  email: '',
  isFavourite: false,
  contactType: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const fileInputRef = useRef();

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('phoneNumber', values.phoneNumber);
    formData.append('isFavourite', values.isFavourite);
    formData.append('contactType', values.contactType);
    if (values.email) {
      formData.append('email', values.email);
    } else {
      formData.append('email', null);
    }
    const file = fileInputRef.current.files[0];
    if (file) {
      formData.append('photo', file);
    }

    dispatch(addContact(formData));

    resetForm();
    fileInputRef.current.value = '';
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
          />
          <ErrorText name="name" />
        </div>

        <div className={s.formGroup}>
          <label htmlFor="phoneNumber" className={s.formLabel}>
            Phone Number
          </label>
          <Field
            className={s.formInput}
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Enter contact phone number"
          />
          <ErrorText name="phoneNumber" />
        </div>

        <div className={s.formGroup}>
          <label htmlFor="email" className={s.formLabel}>
            Email
          </label>
          <Field
            className={s.formInput}
            id="email"
            type="email"
            name="email"
            placeholder="Enter contact email"
          />
          <ErrorText name="email" />
        </div>

        <div className={s.formGroup}>
          <label className={s.formLabel}>Contact Type</label>
          <Field as="select" name="contactType" className={s.formInput}>
            <option value="">Select type</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="home">Home</option>
          </Field>
          <ErrorText name="contactType" />
        </div>

        <div className={s.formGroupCheckbox}>
          <label className={s.formLabel}>
            <Field type="checkbox" name="isFavourite" />
            &nbsp; Mark as Favorite
          </label>
        </div>

        <div className={s.formGroup}>
          <label htmlFor="photo" className={s.formLabel}>
            Photo
          </label>
          <input
            id="photo"
            name="photo"
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className={s.formInput}
          />
        </div>

        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
