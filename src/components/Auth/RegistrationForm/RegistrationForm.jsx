import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../../redux/auth/operations';
import { validationSchemaRegistrationForm } from '../../validationsForm';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaRegistrationForm}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form style={{ width: '100%', marginTop: '1rem' }}>
              <Grid container spacing={2}>
                <Grid xs={12} sx={{ width: '100%' }}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    type="name"
                    autoComplete="family-name"
                    autoFocus
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid xs={12} sx={{ width: '100%' }}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid xs={12} sx={{ width: '100%' }}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
