import React, { Component } from 'react'

import styles from '../styles/Contact.module.css'


const initialState = {
  name: '',
  email: '',
  subject: '',
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
    const { name, email, subject, message, response } = this.state
  }

  render() {
    const { name, email, subject,  message, response } = this.state
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <fieldset>
          <input type='text' name='name' onChange={this.handleChange} value={name} placeholder='Name' required /><br />
          <input type='email' name='email' onChange={this.handleChange} value={email} placeholder='Email' required /><br />
          <input type='text' name='subject' onChange={this.handleChange} value={subject} placeholder='Subject' required /><br />
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