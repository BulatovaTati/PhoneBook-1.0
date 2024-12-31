import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import ContactDeleteModal from '../../Modals/ContactDeleteModal/ContactDeleteModal';
import s from './Contact.module.css';

const Contact = ({ contact, onEditClick }) => {
  const { id, name, number } = contact;
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
      <div className={s.btnContainer}>
        <button
          className={s.contactBtn}
          title="Edit"
          type="button"
          onClick={() => onEditClick(contact)}
        >
          Edit
        </button>
        <button className={s.contactBtn} title="Delete" type="button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
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
