import React, { Component } from 'react'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'


class Navbar extends Component {
  wtfMouseEnter = event => {
    event.target.textContent = 'Blog'
  }

  wtfMouseLeave = event => {
    event.target.textContent = 'WTF'
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <ul>
          <Link href='/about'>
            <a>
              <li className={styles.navlink}>
                About
              </li>
            </a>
          </Link>
          <Link href='/portfolio'>
            <a>
              <li className={styles.navlink}>
                Portfolio
              </li>
            </a>
          </Link>
          <Link href='/blog'>
            <a>
              <li className={styles.navlink} onMouseEnter={this.wtfMouseEnter} onMouseLeave={this.wtfMouseLeave}>
                WTF
              </li>
            </a>
          </Link>
          <Link href='/resume'>
            <a>
              <li className={styles.navlink}>
                Resume
              </li>
            </a>
          </Link>
          <Link href='/contact'>
            <a>
              <li className={styles.navlink}>
                Contact Me
              </li>
            </a>
          </Link>
        </ul>
      </nav>
    )
  }
}


export default Navbar
