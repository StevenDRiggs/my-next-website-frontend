import Link from 'next/link'
import { connect } from 'react-redux'

import { store, storeWrapper } from '../../redux/store/store'
import { fetchAllPosts } from '../../redux/actions/postActions'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'

import styles from '../../styles/Blog/Post.module.css'


const Post = props => {
  const { post } = props
  if (!post || post.not_found) {
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
  let posts = store.getState().posts
  if (posts.length < 1) {
    const postAction = await store.dispatch(fetchAllPosts())
    posts = postAction.payload.posts
  }

  const paths = posts.map(post => (
    {
      params: {
        slug: post.slug,
      },
    }
  ))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = storeWrapper.getStaticProps(
  async ({ store, params }) => {
    let post
    if (store.getState().posts && store.getState().posts.length > 1) {
      post = store.getState().posts.filter(post_ => post_.slug === params.slug)[0]
    } else {
      const response = await fetch(`${BACKEND_DOMAIN}/posts/${params.slug}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      post = await response.json()
    }

    return {
      props: {
        post
      }
    }
  }
)
