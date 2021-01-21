import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/navbar'
import Logo from '../images/logoReact.svg'

import '../styles/globals.css'


const App = ({ Component, pageProps }) => {
  console.log(Component)
  return (
    <>
      <Head>
        <title>Steven Riggs | {Component.name}</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap' />
      </Head>

      <Navbar />

      <Link href='/'>
        <a>
          <Logo className='chrysalis-logo' />
        </a>
      </Link>
      
      <div className='main-display'>
        <Component {...pageProps} />
      </div>
    </>
  )
}


export default App
