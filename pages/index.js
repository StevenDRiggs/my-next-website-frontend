import Head from 'next/head'
import React, { Component } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import Caterpillar from '../animations/components/caterpillar.svg'
import Chrysalis from '../images/logoReact.svg'
import { pageRollIn, showCaterpillar, openEyes, closeEyes } from '../animations/scripts/caterpillar'
//import { wiggle, walk, blink, path, hideChrysalis } from '../animations/scripts/caterpillar'

import styles from '../styles/Home.module.css'


class Home extends Component {
    componentDidMount() {
      const targetElement = document.querySelector('#SVGs')
      disableBodyScroll(targetElement)

      //showCaterpillar()
      pageRollIn()
      //setTimeout(openEyes, 2000)
      //setTimeout(closeEyes, 5000)
    }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <main>
          <div id='SVGs'>
            <Caterpillar id='caterpillar' className={styles.caterpillarSVG} />
          </div>
        </main>
      </div>
    )
  }
}


export default Home
