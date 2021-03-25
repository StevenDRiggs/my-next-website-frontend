import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'

import { store, storeWrapper } from '../../redux/store/store'
import { fetchAllPosts, updatePost, deletePost } from '../../redux/actions/postActions'
import Sidebar from '../../components/sidebar'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'

import styles from '../../styles/Blog/index.module.css'


class Post extends Component {
  constructor(props) {
    super(props)

    const { title, content } = props.post ? props.post : ''

    this.state = {
      editPost: false,
      title,
      content,
    }
  }

  editPostBtn = event => {
    this.setState({
      editPost: true,
    })
  }

  deletePostBtn = event => {
    const { deletePost, post, router } = this.props

    const confirmDelete = confirm(`Are you sure you want to delete post ${post.title} ?`)

    deletePost(post.slug, confirmDelete)

    if (confirmDelete) {
      router.push('/blog')
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { updatePost, post, router } = this.props
    const { title, content } = this.state

    updatePost({
      slug: post.slug,
      title,
      content,
    })

    this.setState({
      editPost: false,
    })

    router.push('/blog')
  }

  hideForm = event => {
    this.setState({
      editPost: false,
    })
  }

  render() {
    const { editPost } = this.state
    const { post, errors } = this.props
    let { user } = this.props
    user = user ? user.user : null
    let pageContent

    if (!post || post.not_found) {
      pageContent = 
        <Link href='/contact'>
          <p>This post has not been created yet. If you would like to see it, send me a message <a>here</a>.</p>
        </Link>
    } else {
      const { created_at, updated_at } = post
      const { title, content } = this.state
      pageContent = 
        editPost ?
          <form className={styles.popupForm} onSubmit={this.handleSubmit}>
            <input className={styles.formInput} type='text' name='title' value={title} onChange={this.handleChange} />
            <textarea className={styles.formInput} name='content' value={content} onChange={this.handleChange} />
            <button className={styles.formSubmitButton} type='submit'>Submit Changes</button>
            <button className={styles.cancelButton} type='button' onClick={this.hideForm}>Cancel</button>
          </form> :
          <>
            {user && user.is_admin ? <button className={styles.blueButton} onClick={this.editPostBtn}>Edit Post</button> : null}
            {user && user.is_admin ? <button className={styles.redButton} onClick={this.deletePostBtn}>Delete Post</button> : null}
            <article>
              <h2 className={styles.postTitle}>{title}</h2>
              <h6>{(created_at === updated_at) ? 'Posted at' : 'Updated at'} {updated_at}</h6>
              <p>{content}</p>
            </article>
          </>
    }

    return (
      <>
        <Sidebar />

        {errors && errors.length > 0 ?
          <div className='errors'>
            <ul>
              {errors.map((error, index) => <li key={index}>{error}</li>)}
            </ul>
          </div> :
            null}

        {pageContent}
      </>
    )
  }
}


const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePost: ({ slug, ...editFormInfo }) => dispatch(updatePost(slug, editFormInfo)),
    deletePost: (slug, confirmDelete) => dispatch(deletePost(slug, confirmDelete)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post))


export const getStaticPaths = async () => {
  let posts = store.getState().posts
  if (posts.length < 1) {
    await store.dispatch(fetchAllPosts())
    posts = store.getState().posts
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
        post,
      }
    }
  }
)
