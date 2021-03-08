import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { storeWrapper } from '../redux/store/store'
import Navbar from '../components/navbar'
import Logo from '../images/logoReact.svg'

import '../styles/globals.css'


const App = ({ Component, pageProps}) => {
  const router = useRouter()
  let titleAddon
  switch (router.route) {
    case '/':
      titleAddon = ' | Home'
      break
    case '/about':
      titleAddon =  ' | About'
      break
    default:
      titleAddon = null
  }

  return (
    <>
      <Head>
        <title>Steven Riggs{titleAddon}</title>
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


export default storeWrapper.withRedux(App)
