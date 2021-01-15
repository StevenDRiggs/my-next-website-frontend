import Link from 'next/link'

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
          <CIL className={styles.thumbnail} />
          <caption className={styles.caption}>Calapitter Image Library</caption>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <Yeti className={styles.thumbnail} />
          <caption className={styles.caption}>Yeti The Bookclub App</caption>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <CIL className={styles.thumbnail} />
          <caption className={styles.caption}>Recipe Calculator</caption>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <CIL className={styles.thumbnail} />
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
