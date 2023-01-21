import PropTypes from 'prop-types';
import {ContactItem,ContactName, ContactNumber, DelBtn} from './ContactsItem.styled'

const ContactsItem=({ name, number, onDeleteContact })=> {
  return (
    <ContactItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DelBtn onClick={onDeleteContact}>
        delete
      </DelBtn>
    </ContactItem>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
