import React, { Component } from 'react'

import Post from './post'
import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/BlogDisplay.module.css'


const initialState = {
    view: 'index',
}


class BlogDisplay extends Component {
    setView = view => {
      this.setState({
        view: view,
      })
    }

    fetchAllPosts = async () => {
        const posts = await fetch(`${BACKEND_DOMAIN}/posts`)
        const postsJSON = await posts.json()

        return JSON.parse(postsJSON)
    }

    render() {
        const { view } = this.state

        let jsx
        switch (view) {
            default:  // 'index'
                jsx = fetchAllPosts().map(post => (
                    <Post key={post.id} title={post.title} content={post.content} />
                ))
        }

        return (
            <div className={styles.blogDisplay}>
            </div>
        )
    }
}


export default BlogDisplay