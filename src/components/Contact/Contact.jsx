import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'store/contactsReducer/contactsOperations';
import { StyledLi } from './Contact.styled';

const Contact = ({ id, name, phone, index }) => {
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeContact(id));
  };

  return (
    <StyledLi>
      <span>{index}</span>
      <span> {name} </span>
      <span>{phone}</span>
      <button data-nanoid={id} onClick={() => handleRemove(id)}>
        Remove
      </button>
    </StyledLi>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
