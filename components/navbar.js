import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import styles from '../styles/Navbar.module.css'


class Navbar extends Component {
  wtfMouseEnter = event => {
    event.target.textContent = 'Blog'
  }

  wtfMouseLeave = event => {
    event.target.textContent = 'WTF'
  }

  render() {
    const { router } = this.props

    return (
      <nav className={styles.navbar}>
        <ul>
          <Link href='/about'>
            <a>
              <li className={router.pathname === '/about' ? `${styles.navlink} ${styles.active}` : styles.navlink}>
                About
              </li>
            </a>
          </Link>
          <Link href='/portfolio'>
            <a>
              <li className={router.pathname === '/portfolio' ? `${styles.navlink} ${styles.active}` : styles.navlink}>
                Portfolio
              </li>
            </a>
          </Link>
          <Link href='/blog'>
            <a>
              <li className={router.pathname === '/blog' ? `${styles.navlink} ${styles.active}` : styles.navlink} onMouseEnter={this.wtfMouseEnter} onMouseLeave={this.wtfMouseLeave} onFocus={this.wtfMouseEnter} onBlur={this.wtfMouseLeave}>
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
              <li className={router.pathname === '/contact' ? `${styles.navlink} ${styles.active}` : styles.navlink}>
                Contact Me
              </li>
            </a>
          </Link>
        </ul>
      </nav>
    )
  }
}


export default withRouter(Navbar)
