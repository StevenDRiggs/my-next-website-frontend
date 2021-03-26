import Link from 'next/link'
import Image from 'next/image'

import CIL from '../images/CIL.svg'
import Yeti from '../images/Yeti.svg'

import styles from '../styles/Portfolio.module.css'


const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolioGrid}>
        <div className={styles.gridCell}>
          <Link href='https://yeti-the-bookclub-app.herokuapp.com'>
            <a target='_blank'>
              <Yeti />
              <p>Yeti The Bookclub App</p>
            </a>
          </Link>
        </div>
        <div className={styles.gridCell}>
          <Link href='https://calapitter-image-library.herokuapp.com/'>
            <a target='_blank'>
              <CIL />
              <p>Calapitter Image Library</p>
            </a>
          </Link>
        </div>

        {/* <div className={styles.gridCell}>
          <Link href='#'>
            <a>
              <Image src='/images/recipe-calculator.png' alt='Recipe Calculator' width={1440} height={900} />
              <p>Recipe Calculator</p>
            </a>
          </Link>
        </div>
        <div className={styles.gridCell}>
          <Link href='#'>
            <a>
              <Image src='/images/ruled-me-cli.png' alt='Ruled.me Web Scraper CLI' width={1440} height={900} />
              <p>Ruled.me Web Scraper CLI</p>
            </a>
          </Link>
        </div>
        <div className={styles.gridCell}>
          <Link href='#'>
            <a>
              <Image src='/images/sth.png' alt='Seed, Time and Harvest Database' width={1440} height={900} />
              <p>Seed, Time and Harvest Database</p>
            </a>
          </Link>
        </div> */}

        <div>
          <p>More Coming Soon...</p>
        </div>
      </div>
    </>
  )
}


export default Portfolio
