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

  render() {
    return (
      <div className={styles.sidebar}>
        <button className={styles.button} onClick={this.showEmailForm} styles={styles}>EmailBtn</button>
        <button className={styles.button}>DownloadBtn</button>
        <button className={styles.button}>PopoutBtn</button>
      </div>
    )
  }
}


export default ResumeSidebar
