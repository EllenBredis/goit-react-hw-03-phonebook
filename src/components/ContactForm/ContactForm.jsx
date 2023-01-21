import PropTypes from 'prop-types';
import React, { Component } from 'react'
import {Form, FormName,FormLabel,InputName, InputNumber, SubmitBtn } from './ContactForm.styled'
import { nanoid } from 'nanoid';


class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
  
    handleInputChange = e => {
      this.setState({
        [e.currentTarget.name]: e.currentTarget.value,
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit({ ...this.state, id: nanoid() });
  
      this.setState({ name: '', number: '' });
    };
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormName>Phonebook</FormName>
          <FormLabel>
            Name
            <InputName
              onChange={this.handleInputChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>
            Number
            <InputNumber
              onChange={this.handleInputChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <SubmitBtn type="submit">
            Add contact
          </SubmitBtn>
        </Form>
      );
    }
  }
  
  ContactForm.propTypes = {
    props: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  };
  
  export default ContactForm;