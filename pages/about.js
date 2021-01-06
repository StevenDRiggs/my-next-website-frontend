import Image from 'next/image'

import styles from '../styles/About.module.css'


const About = () => {
  return (
    <article>
      <h2>About Me</h2>
      <br />
      <img
        src='/Steven_Riggs_photo.jpg'
        alt='Steven Riggs'
        className={styles.photo} />
      <span>I am a self-taught and formally educated full stack software developer with a current emphasis on web applications. I design from the ground up, and really enjoy coming up with non-standard solutions to precisely meet the needs of my clients.</span>
    </article>
  )
}


export default About
