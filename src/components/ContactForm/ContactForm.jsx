import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormButton, FormInput, FormLabel } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // this.props.createContact({
    //   name: this.state.name,
    //   number: this.state.number
    // })
    this.props.createContact(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="name">
          Name
          <FormInput
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </FormLabel>
        <FormLabel htmlFor="name">
          Number
          <FormInput
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  createContact: PropTypes.func,
};

export default ContactForm;
