import React, { Component } from 'react'

import styles from '../styles/Resume.module.css'


class Resume extends Component {
  downloadButton = event => {
    window.open('/Steven_Riggs_Resume.pdf', '_blank', 'download')
  }

  openNewWindowButton = event => {
    window.open('https://docs.google.com/document/d/e/2PACX-1vSDy7V_2jS4XrzExfGiq12rP90TiK2KM2J1UzdRgkXnJNH-p5U7IZavSjl6WfYQfOvskCeqnNQwKPx_/pub')
  }

  render() {
    return (
      <>
        <article>
          <iframe src='https://docs.google.com/document/d/e/2PACX-1vSDy7V_2jS4XrzExfGiq12rP90TiK2KM2J1UzdRgkXnJNH-p5U7IZavSjl6WfYQfOvskCeqnNQwKPx_/pub?embedded=true' className={styles.resume} />
        </article>
        <button className={styles.downloadBtn} onClick={this.downloadButton}>Download PDF</button>
        <button className={styles.openNewWindowBtn} onClick={this.openNewWindowButton}>Open in New Window</button>
      </>
    )
  }
}


export default Resume
