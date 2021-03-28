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

      {router.route.match(/\/blog/) ? <h2 className='WTFHeading'>When Thoughts <span>Fracture...</span></h2> : null}

      <div className='mainDisplay'>
        <Component {...pageProps} />
      </div>

      {/* {router.route.match(/\/blog/) || router.route.match(/\/resume/) ? null :
        <footer className="pageFooter">
          <p>
            Background Photo by <a
              href="https://unsplash.com/@eliy_fin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener"
            >
              Laura Ollier
            </a> on <a
              href="https://unsplash.com/photos/1XnXnRdzGbk"
              target="_blank"
              rel="noopener"
            >
              Unsplash
            </a>
          </p>
          <p>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener"
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel Logo" className="vercelLogo" />
            </a>
          </p>
        </footer>
      } */}
    </>
  )
}


export default storeWrapper.withRedux(App)
