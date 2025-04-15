import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { requestResetEmail } from '../../../redux/auth/operations';
import customToast from '../../Toast/Toast';

const RequestResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setIsSent(false);

    if (!email) {
      setError('Email is required');
      return;
    }

    try {
      const resultAction = await dispatch(requestResetEmail(email)).unwrap();
      customToast('success', resultAction);
      setIsSent(true);
      setEmail('');
      setError('');
    } catch (_) {
      setIsSent(false);
      customToast('error', 'Oops, try again');
    }
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
          Reset Password
        </Typography>

        {isSent ? (
          <Typography sx={{ mt: 4 }} align="center">
            If an account with this email exists, a password reset link has been sent. Please check
            your inbox.
          </Typography>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={!!error}
              helperText={error}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Send reset link
            </Button>
            <div className="forgot-password">
              <Link to="/login">Back to login</Link>
            </div>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default RequestResetPasswordForm;
