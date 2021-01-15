import Link from 'next/link'
import Image from 'next/image'

import CIL from '../images/CIL.svg'
import Yeti from '../images/Yeti.svg'

import styles from '../styles/Portfolio.module.css'


const Portfolio = () => {
  return (
    // <div className={styles.svgTester}>
    //   <Yeti className={styles.testItem} />
    // </div>
    <div className={styles.portfolioGrid}>
      <Link href='#'>
        <a>
          <Yeti className={styles.thumbnail} />
          <caption className={styles.caption}>Yeti The Bookclub App</caption>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <CIL className={styles.thumbnail} />
          <caption className={styles.caption}>Calapitter Image Library</caption>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <Image src='/images/recipe-calculator.png' alt='Recipe Calculator' width={1440} height={900} className={styles.thumbnail} />
          <caption className={styles.caption}>Recipe Calculator</caption>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <Image src='/images/ruled-me-cli.png' alt='Ruled.me Web Scraper CLI' width={1440} height={900} className={styles.thumbnail} />
          <caption className={styles.caption}>Ruled.me Web Scraper CLI</caption>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <CIL className={styles.thumbnail} />
          <caption className={styles.caption}>Seed, Time and Harvest Database</caption>
        </a>
      </Link>
    </div>
  )
}


export default Portfolio
