import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { updateContact } from '../../../redux/contacts/operations';
import { Button, TextField, Box } from '@mui/material';
import { validationSchemaContactForm } from '../../validationsForm';
import s from '../ContactDeleteModal/ContactDeleteModal.module.css';

const EditContactModal = ({ isOpen, onClose, contact }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: contact.name || '',
    number: contact.number || '',
  };

  const handleSubmit = values => {
    const { name, number } = values;
    dispatch(updateContact({ id: contact.id, name, number }));
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <h2 className={s.titleModal}>Edit Contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaContactForm}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <div>
                <Field
                  name="name"
                  label="Name"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </div>
              <div>
                <Field
                  name="number"
                  label="Phone Number"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  error={touched.number && Boolean(errors.number)}
                  helperText={touched.number && errors.number}
                />
              </div>
              <div>
                <Button type="submit" variant="contained" fullWidth>
                  Save Changes
                </Button>
                <Button onClick={onClose} variant="outlined" fullWidth sx={{ mt: 2 }}>
                  Cancel
                </Button>
              </div>
            </Box>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditContactModal;
