import React, { Component } from 'react'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/Contact.module.css'


const initialState = {
  name: '',
  email: '',
  message: '',
  response: true,
}


class Contact extends Component {
  state = {
    ...initialState,
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  handleCheckbox = event => {
    this.setState({
      ...this.state,
      response: !this.state.response,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      ...initialState,
    })

    fetch(`${BACKEND_DOMAIN}/contact`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then(json => alert(`Thank you for reaching out, ${json.name}!\nA copy of your communication has been sent to ${json.email}.\n${json.response ? 'I will respond to you as soon as possible.' : ''}`))
  }

  render() {
    const { name, email, subject,  message, response } = this.state
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <fieldset>
          <input type='text' name='name' onChange={this.handleChange} value={name} placeholder='Name' required /><br />
          <input type='email' name='email' onChange={this.handleChange} value={email} placeholder='Email' required /><br />
          <textarea name='message' onChange={this.handleChange} value={message} placeholder='What can I help you with?' required /><br />

          <label htmlFor='responseCheckbox'>Would you like a response?</label>
          <input type='checkbox' name='response' id='responseCheckbox' onChange={this.handleCheckbox} checked={response} />
          </fieldset>

        <br />

        <button type='submit'>Submit</button>
      </form>
    )
  }
}


export default Contact
