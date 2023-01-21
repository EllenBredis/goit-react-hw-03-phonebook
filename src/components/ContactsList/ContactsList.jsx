import ContactsItem from 'components/ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import {ContactWrapper,ContactTitle} from './ContactsList.styled'

const ContactsList=({ list, onDeleteContact })=> {
  return (
    <ContactWrapper>
      <ContactTitle>Contacts</ContactTitle>
      <ul>
        {list.map(({ id, name, number }) => {
          return (
            <ContactsItem
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          );
        })}
      </ul>
    </ContactWrapper>
  );
}

ContactsList.propTypes = {
  list:PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;

