import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { getGoogleOAuthUrl } from '../../redux/auth/operations.js';

const GoogleLoginButton = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    try {
      const result = await dispatch(getGoogleOAuthUrl()).unwrap();
      if (result) {
        window.location.href = result;
      } else {
        console.error('OAuth URL is missing');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <Button fullWidth variant="contained" onClick={handleGoogleLogin} sx={{ mt: 2 }}>
      Login with Google
    </Button>
  );
};

export default GoogleLoginButton;
