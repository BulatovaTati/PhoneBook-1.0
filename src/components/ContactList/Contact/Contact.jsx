import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';
import ContactDeleteModal from '../../ContactDeleteModal/ContactDeleteModal';

const Contact = ({ contact: { id, name, number } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      <button className={s.contactBtn} title="Delete" type="button" onClick={handleDeleteClick}>
        Delete
      </button>

      <ContactDeleteModal isOpen={isModalOpen} onClose={handleCloseModal} contactId={id} />
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
