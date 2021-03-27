import React, { Component } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import EmailResumeForm from '../components/email_resume_form'
import ResumeSidebar from '../components/resume_sidebar'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/Resume.module.css'


const initialState = {
  emailFormVisible: false,
}


class Resume extends Component {
  state = {
    ...initialState,
  }

  showEmailFormBtn = () => {
    this.setState({
      emailFormVisible: true,
    })
  }

  hideEmailFormBtn = () => {
    this.setState({
      emailFormVisible: false,
    })
  }

  componentDidMount() {
    const targetElement = document.querySelector('#resume')
    disableBodyScroll(targetElement)
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  render() {
    const { emailFormVisible } = this.state

    return (
      <>
        <ResumeSidebar showEmailFormBtn={this.showEmailFormBtn} hideEmailFormBtn={this.hideEmailFormBtn} />

        {emailFormVisible ? <EmailResumeForm hideEmailFormBtn={this.hideEmailFormBtn} /> : null}

        <article>
          <iframe id='resume' className={styles.resume} title='Resume' src='https://docs.google.com/document/d/e/2PACX-1vSDy7V_2jS4XrzExfGiq12rP90TiK2KM2J1UzdRgkXnJNH-p5U7IZavSjl6WfYQfOvskCeqnNQwKPx_/pub?embedded=true' />
        </article>
      </>
    )
  }
}


export default Resume
