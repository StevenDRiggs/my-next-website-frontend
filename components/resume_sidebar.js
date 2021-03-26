import React, { Component } from 'react'

import styles from '../styles/Blog/Sidebar.module.css'


class ResumeSidebar extends Component {
  showEmailForm = async () => {
    const { showEmailFormBtn } = this.props

    await showEmailFormBtn()

    const emailForm = document.querySelector('#emailForm')

    emailForm.style.display = 'flex'

    emailForm.querySelector('input').focus()
  }

  hideEmailForm = () => {
    const { hideEmailFormBtn } = this.props

    hideEmailFormBtn()

    const emailForm = document.querySelector('#emailForm')

    emailForm.style.display = 'none'

    Array.from(emailForm.children).forEach(child => child.blur())
  }

  downloadBtn = () => {
    window.open('/Steven_Riggs_Resume.pdf', '_blank', 'download')
  }

  popoutBtn = () => {
    window.open('https://docs.google.com/document/d/e/2PACX-1vSDy7V_2jS4XrzExfGiq12rP90TiK2KM2J1UzdRgkXnJNH-p5U7IZavSjl6WfYQfOvskCeqnNQwKPx_/pub')
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <button className={styles.button} onClick={this.showEmailForm} styles={styles}>EmailBtn</button>
        <button className={styles.button} onClick={this.downloadBtn}>DownloadBtn</button>
        <button className={styles.button} onClick={this.popoutBtn}>PopoutBtn</button>
      </div>
    )
  }
}


export default ResumeSidebar
