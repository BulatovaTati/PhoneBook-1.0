import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import customToast from '../components/Toast/Toast';
import { confirmGoogleLogin } from '../redux/auth/operations.js';

const GoogleRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      dispatch(confirmGoogleLogin(code))
        .unwrap()
        .then(() => {
          customToast('success', 'Successfully logged in with Google!');
          navigate('/contacts');
        })
        .catch(() => {
          customToast('error', 'Google login failed.');
          navigate('/login');
        });
    }
  }, [dispatch, searchParams, navigate]);

  return <p>Logging in with Google...</p>;
};

export default GoogleRedirectPage;
