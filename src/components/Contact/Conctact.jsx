import PropTypes from 'prop-types';
import { ContactDelitButton, ContactItem } from './Contact.styled';

const Contact = ({ name, number, onDeleteContact }) => (
  <ContactItem>
    <p>
      {name}: {number}
    </p>
    <ContactDelitButton type="button" onClick={onDeleteContact}>
      Delete
    </ContactDelitButton>
  </ContactItem>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
