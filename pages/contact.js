import React, { Component } from 'react'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/Blog/index.module.css'


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
      [event.target.name]: event.target.value,
    })
  }

  handleCheckbox = event => {
    this.setState(prevState => ({
      response: !prevState.response,
    }))
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
      .catch(error => {
        let error_msg

        if (error.errno === 'ECONNREFUSED') {
          error_msg = 'Error communicating with server'
        } else {
          error_msg = error.message
        }

        alert(`${error_msg}\nPlease try again later.`)
      })
  }

  render() {
    const { name, email, subject,  message, response } = this.state
    return (
      <form className={styles.popupForm} onSubmit={this.handleSubmit}>
        <fieldset>
          <input type='text' className={styles.formInput} name='name' onChange={this.handleChange} value={name} placeholder='Name' required /><br />
          <input type='email' className={styles.formInput} name='email' onChange={this.handleChange} value={email} placeholder='Email' required /><br />
          <textarea className={styles.formInput} name='message' onChange={this.handleChange} value={message} placeholder='What can I help you with?' required /><br />

          <label htmlFor='responseCheckbox' className={styles.formInput}>Would you like a response?</label>
          <br />
          <input type='checkbox' name='response' id='responseCheckbox' onChange={this.handleCheckbox} checked={response} />
        </fieldset>

        <br />

        <button type='submit' className={styles.formSubmitButton}>Submit</button>
      </form>
    )
  }
}


export default Contact
