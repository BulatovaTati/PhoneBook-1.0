import * as Yup from 'yup';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const validationSchemaContactForm = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(nameRegExp, 'Name is not valid')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(3, 'Too Short!')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
  email: Yup.string().email('Invalid email format').nullable().optional(),
  isFavourite: Yup.boolean(),
  contactType: Yup.string()
    .oneOf(['personal', 'work', 'home'], 'Invalid contact type')
    .required('Required'),
  photo: Yup.mixed()
    .nullable()
    .test('fileSize', 'File too large', value => {
      return !value || value.size <= 5 * 1024 * 1024;
    })
    .test('fileType', 'Unsupported file type', value => {
      return !value || ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    }),
});

export const validationSchemaLoginForm = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(3, 'Password must be at least 3 characters')
    .required('Password is required'),
});

export const validationSchemaRegistrationForm = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(3, 'Password must be at least 3 characters')
    .required('Password is required'),
});
