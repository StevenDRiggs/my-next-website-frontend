import React, { Component } from 'react'

import Post from './post'
import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/BlogDisplay.module.css'


const initialState = {
  view: 'index',
}


class BlogDisplay extends Component {
  state = {
    ...initialState,
  }

  setView = view => {
    this.setState({
      view: view,
    })
  }

  getServerSideProps = async () => {
  }

  render() {
    const { view } = this.state
    const { posts } = this.props
    let jsx

    switch (view) {
      case 'index':
        jsx = 'Blog Display'
        //jsx = posts.map(post => <Post key={post.id} title={post.title} content={post.content} />)
      default:
        null
    }

    console.log(jsx)

    return (
      <div className={styles.blogDisplay}>
        {jsx}
      </div>
    )
  }
}



export default BlogDisplay
