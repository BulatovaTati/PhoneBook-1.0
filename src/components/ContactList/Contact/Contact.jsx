import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt, FaEnvelope, FaStar } from 'react-icons/fa';
import ContactDeleteModal from '../../Modals/ContactDeleteModal/ContactDeleteModal';
import s from './Contact.module.css';

const Contact = ({ contact, onEditClick }) => {
  const { _id: id, name, phoneNumber, email, isFavourite, contactType, photo } = contact;
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
        {photo && (
          <div className={s.contactInfo}>
            <img src={photo} alt={`${name}'s photo`} className={s.contactPhoto} />
          </div>
        )}
        <div className={s.contactInfo}>
          <FaUser color="#007bff" />
          <p className={s.contactText}>{name}</p>
        </div>
        <div className={s.contactInfo}>
          <FaPhoneAlt color="#007bff" />
          <p className={s.contactText}>{phoneNumber}</p>
        </div>
        {email && (
          <div className={s.contactInfo}>
            <FaEnvelope color="#007bff" />
            <p className={s.contactText}>{email}</p>
          </div>
        )}
        {isFavourite && (
          <div className={s.contactInfo}>
            <FaStar color="gold" />
            <p className={s.contactText}>Favorite</p>
          </div>
        )}
        <div className={s.contactInfo}>
          <p className={s.contactText}>Type: {contactType}</p>
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
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string,
    isFavourite: PropTypes.bool,
    contactType: PropTypes.string.isRequired,
    photo: PropTypes.string,
  }).isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default Contact;
