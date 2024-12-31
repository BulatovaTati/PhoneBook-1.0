import { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import s from './ContactDeleteModal.module.css';

Modal.setAppElement('#root');

const ContactDeleteModal = ({ isOpen, onClose, contactId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDelete = () => {
    dispatch(deleteContact(contactId));
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      onClick={handleOverlayClick}
      aria-modal="true"
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <h3>Are you sure you want to delete the contact?</h3>
      <div className={s.modalActions}>
        <button onClick={onClose} className={s.cancelBtn}>
          Cancel
        </button>
        <button onClick={handleDelete} className={s.confirmBtn}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

ContactDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactDeleteModal;
