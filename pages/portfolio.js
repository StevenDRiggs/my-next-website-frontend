import Link from 'next/link'
import Image from 'next/image'

import CIL from '../images/CIL.svg'

import styles from '../styles/Portfolio.module.css'


const Portfolio = () => {
  return (
    <div className={styles.portfolioGrid}>
      <Link href='#'>
        <a>
          <CIL className={styles.thumbnail} />
        </a>
      </Link>
      <Link href='#'>
        <a>
          <CIL className={styles.thumbnail} />
        </a>
      </Link>
      <Link href='#'>
        <a>
          <CIL className={styles.thumbnail} />
        </a>
      </Link>
      <Link href='#'>
        <a>
          <CIL className={styles.thumbnail} />
        </a>
      </Link>
    </div>
  )
}


export default Portfolio
