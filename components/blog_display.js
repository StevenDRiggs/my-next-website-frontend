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

    fetchAllPosts = async () => {
        const posts = await fetch(`${BACKEND_DOMAIN}/posts`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const postsJSON = await posts.json()

        return postsJSON
    }

    render() {
        const { view } = this.state

        let jsx
        switch (view) {
            case 'index':
                jsx = JSON.stringify(this.fetchAllPosts())
                //     <Post key={post.id} title={post.title} content={post.content} />
                // })
            default:
                null
        }

        return (
            <div className={styles.blogDisplay}>
                {jsx}
            </div>
        )
    }
}


export default BlogDisplay