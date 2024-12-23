import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className={s.contactInfo}>
          <FaUser color="#007bff" />
          <p className={s.contactText}>{name}</p>
        </div>
        <div className={s.contactInfo}>
          <FaPhoneAlt color="#007bff" />
          <p className={s.contactText}> {number}</p>
        </div>
      </div>
      <button
        className={s.contactBtn}
        title="Delete"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
