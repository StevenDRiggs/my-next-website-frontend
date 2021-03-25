import React, { Component } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

import { storeWrapper } from '../../redux/store/store'
import { fetchAllPosts, deletePost } from '../../redux/actions/postActions'
import Sidebar from '../../components/sidebar'
import NewPostForm from '../../components/new_post_form'
import EditPostForm from '../../components/edit_post_form'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'

import styles from '../../styles/Blog/index.module.css'


const initialState = {
  newPost: false,
  post: null,
}


class Blog extends Component {
  state = {
    ...initialState,
  }

  clearPost = () => {
    this.setState({
      post: null,
    })
  }

  toggleNewPostForm = () => {
    this.setState({
      newPost: !this.state.newPost,
    })
  }

  newPostBtn = () => {
    this.setState({
      newPost: true,
    })
  }

  editPostBtn = post => {
    this.setState({
      post,
    })
  }

  deletePostBtn = post => {
    const { deletePost } = this.props

    const confirmDelete = confirm(`Are you sure you want to delete post ${post.title} ?`)

    deletePost(post.slug, confirmDelete)

    this.clearPost()
  }

  hideForm = event => {
    this.setState({
      ...initialState,
    })
  }

  render() {
    const { post, newPost } = this.state
    const { posts, errors } = this.props
    let { user } = this.props
    user = user ? user.user : null

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

        <div>
          {user && user.is_admin ? <button className={styles.blueButton} onClick={this.newPostBtn}>New Post</button> : null}
          {newPost ? <NewPostForm styles={styles} hideForm={this.hideForm} /> : null}

          {post && post !== null ? <EditPostForm post={post} clearPost={this.clearPost} styles={styles} hideForm={this.hideForm} /> : null}

          {posts.length > 0 ?
              posts.map(post => (
                <article key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <a><h3 className={styles.postTitle}>{post.title}</h3></a>
                  </Link>
                  <h6>{post.updated_at}</h6>
                  {user && user.is_admin ? <button className={styles.blueButton} onClick={() => this.editPostBtn(post)}>Edit Post</button> : null}
                  {user && user.is_admin ? <button className={styles.redButton} onClick={() => this.deletePostBtn(post)}>Delete Post</button> : null}
                  <p>{post.content}</p>
                  <br />
                </article>
              ))
              : <p>Loading Posts...</p>
          }
        </div>
      </>
    )
  }
}


const mapStateToProps = ({ user, posts, errors }) => {
  return {
    user,
    posts,
    errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (slug, confirmDelete) => dispatch(deletePost(slug, confirmDelete)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blog)


export const getServerSideProps = storeWrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(fetchAllPosts())
  }
)

