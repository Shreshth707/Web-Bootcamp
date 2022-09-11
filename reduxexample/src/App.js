import { Component, createRef } from "react";
import {connect} from 'react-redux';
import ContactView from "./ContactView";
import { createContact, deleteContact } from "./redux/Actions";

class App extends Component {
  nameRef = createRef();
  emailRef = createRef();

  handleSubmit = (evt) => {
    evt.preventDefault(); // prevents call to server
    let contact = {
      name : this.nameRef.current.value,
      email : this.emailRef.current.value
    };

    this.props.newContact(contact);
    this.nameRef.current.value = "";
    this.emailRef.current.value = "";
    this.nameRef.current.focus();
  }
  render() {
    return <div>
        <h1>Contact Application</h1>
        <form onSubmit={this.handleSubmit}>
          Name : <input type="text" ref={this.nameRef} /> <br />
          Email : <input type="email" ref = {this.emailRef} /> <br />
          <button type="submit">Add new Contact</button>
        </form>
        <hr />
        {
         this.props.contacts.map(contact => <ContactView 
          key={contact.email} 
          removeContact ={this.props.removeContact}
          contact={contact} />)
        }
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newContact: contact => dispatch(createContact(contact)),
    removeContact: email => dispatch(deleteContact(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);