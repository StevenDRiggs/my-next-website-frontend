import React, { Component } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

import { storeWrapper } from '../../redux/store/store'
import { fetchAllPosts } from '../../redux/actions/postActions' //, deletePost } from '../../redux/actions/postActions'
import Sidebar from '../../components/sidebar'
import EditPostForm from '../../components/edit_post_form'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'

import styles from '../../styles/Blog/index.module.css'


class Blog extends Component {
  state = {
    post: null,
  }

  clearPost = () => {
    this.setState({
      post: null,
    })
  }

  editPostBtn = post => {
    this.setState({
      post,
    })
  }

  deletePostBtn = () => {
    console.log('Delete Post Button')
  }

  render() {
    const { post } = this.state
    const { posts } = this.props
    let { user } = this.props
    user = user ? user.user : null

    return (
      <>
        <Sidebar />

        {user && user.is_admin ? <Link href='/blog/newPost'><a><button>New Post</button></a></Link> : null}

        { post && post !== null ? <EditPostForm post={post} clearPost={this.clearPost} styles={styles} /> : null}

        <div className={styles.postsContainer}>
          {posts.length > 0 ?
              posts.map(post => (
                <article className={styles.post} key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <a><h3>{post.title}</h3></a>
                  </Link>
                  <h6>{post.updated_at}</h6>
                  {user && user.is_admin ? <button onClick={() => this.editPostBtn(post)}>Edit Post</button> : null}
                  {user && user.is_admin ? <button onClick={this.deletePostBtn}>Delete Post</button> : null}
                  <p>{post.content}</p>
                </article>
              ))
              : <p>Loading Posts...</p>
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

