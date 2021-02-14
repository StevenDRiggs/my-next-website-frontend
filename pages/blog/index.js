import React, { Component } from 'react'
import Link from 'next/link'

import { storeWrapper } from '../../redux/store/store'
import { fetchAllPosts } from '../../redux/actions/postActions'
import { Provider, connect } from 'react-redux'
import Sidebar from '../../components/sidebar'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'

import styles from '../../styles/Blog/index.module.css'


class Blog extends Component {
  editPostBtn = () => {
    console.log('Edit Post Button')
  }

  deletePostBtn = () => {
    console.log('Delete Post Button')
  }

  render() {
    const { user, posts } = this.props

    return (
      <>
        <Sidebar />

        {user && user.is_admin ? <Link href='/blog/newPost'><a><button>New Post</button></a></Link> : null}

        <div className={styles.postsContainer}>
          {posts.length > 0 ?
              posts.map(post => (
                <article className={styles.post} key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <a><h3>{post.title}</h3></a>
                  </Link>
                  <h6>{post.updated_at}</h6>
                  {user && user.is_admin ? <button onClick={this.editPostBtn}>Edit Post</button> : null}
                  {user && user.is_admin ? <button onClick={this.deletePostBtn}>Delete Post</button> : null}
                  <p>{post.content}</p>
                </article>
              ))
              : <p>posts is empty</p>
          }
        </div>
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
    posts: state.posts,
  }
}


export default connect(mapStateToProps)(Blog)


export const getServerSideProps = storeWrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(fetchAllPosts())
  }
)

