import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';
import { deleteContact } from '../../../redux/contactsOps';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

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
      <button className={s.contactBtn} title="Delete" type="button" onClick={handleDelete}>
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
