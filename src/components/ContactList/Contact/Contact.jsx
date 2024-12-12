import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div>
      <p>
        <FaUser />
        {name}
      </p>
      <p>
        <FaPhoneAlt />
        {number}
      </p>
      <button title="Delete" type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
