import Link from 'next/link'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'

import styles from '../../styles/Blog/Post.module.css'


const Post = props => {

  const { post } = props
  if (post.not_found) {
    return (
      <article className={styles.post}>
        <Link href='/contact'>
          <p>This post has not been created yet. If you would like to see it, send me a message <a>here</a>.</p>
        </Link>
      </article>
    )
  }
  const { title, content, created_at, updated_at } = post

  return (
    <article className={styles.post}> 
      <h2>{title}</h2>
      <h6>{(created_at === updated_at) ? 'Posted at' : 'Updated at'} {updated_at}</h6>
      <p>{content}</p>
    </article>
  )
}


export default Post


export const getStaticPaths = async () => {
  const response = await fetch(`${BACKEND_DOMAIN}/posts`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const posts = await response.json()

  const paths = posts.map(post => (
    {
      params: {
        slug: `${post.slug}`
      }
    }
  ))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`${BACKEND_DOMAIN}/posts/${params.slug}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const post = await response.json()

  return {
    props: {
      post
    }
  }
}
