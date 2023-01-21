import { Component } from 'react';
import {Container} from './App.styled'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  };

  processSubmit = data => {
    let [check] = this.state.contacts.filter(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (check) {
      alert(`${data.name} is already in your contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  setFilter = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  getFilteredList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
    } 
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts!== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };

  render() {
    const filteredList = this.getFilteredList();

    return (
      <Container>
        <ContactForm onSubmit={this.processSubmit} />
        <Filter onChange={this.setFilter} filter={this.state.filter} />
        <ContactList
          list={filteredList}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}



export default App;