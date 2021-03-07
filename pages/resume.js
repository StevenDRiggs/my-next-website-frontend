import React, { Component } from 'react'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/Resume.module.css'


const initialState = {
  name: '',
  email: '',
}


class Resume extends Component {
  state = {
    ...initialState,
  }

  handleFormChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  downloadButton = event => {
    window.open('/Steven_Riggs_Resume.pdf', '_blank', 'download')
  }

  openNewWindowButton = event => {
    window.open('https://docs.google.com/document/d/e/2PACX-1vSDy7V_2jS4XrzExfGiq12rP90TiK2KM2J1UzdRgkXnJNH-p5U7IZavSjl6WfYQfOvskCeqnNQwKPx_/pub')
  }

  emailResumeButton = event => {
    const buttons = document.querySelectorAll(`.${styles.btn}`)
    buttons.forEach(button => button.disabled = true)

    const modal = document.querySelector(`.${styles.modal}`)
    modal.style.display = 'block'
  }

  closeModal = event => {
    const modal = document.querySelector(`.${styles.modal}`)
    modal.style.display = 'none'

    const buttons = document.querySelectorAll(`.${styles.btn}`)
    buttons.forEach(button => button.disabled = false)
  }

  submitForm = event => {
    event.preventDefault()

    this.closeModal()
    
    fetch(`/resume`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then(json => alert(`Thank you for your interest, ${json.name}!\nA copy of my resume has been sent to ${json.email}.`))
  }

  render() {
    const { name, email } = this.state

    return (
      <>
        <article>
          <iframe src='https://docs.google.com/document/d/e/2PACX-1vSDy7V_2jS4XrzExfGiq12rP90TiK2KM2J1UzdRgkXnJNH-p5U7IZavSjl6WfYQfOvskCeqnNQwKPx_/pub?embedded=true' className={styles.resume} />
        </article>
        <button className={`${styles.btn} ${styles.downloadBtn}`} onClick={this.downloadButton}>Download PDF</button>
        <button className={`${styles.btn} ${styles.openNewWindowBtn}`} onClick={this.openNewWindowButton}>Open in New Window</button>
        <button className={`${styles.btn} ${styles.emailResumeBtn}`} onClick={this.emailResumeButton}>Email me the Resume</button>

        <div className={styles.modal}>
          <span className={styles.closeBtn} onClick={this.closeModal}>&times;</span>
          <form onSubmit={this.submitForm}>
            <h2>Who would you like me send it to?</h2>
            <fieldset>
              <input type='text' name='name' onChange={this.handleFormChange} placeholder='Name' value={name} />
              <input type='email' name='email' onChange={this.handleFormChange} placeholder='Email' value={email} required />
            </fieldset>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </>
    )
  }
}


export default Resume
