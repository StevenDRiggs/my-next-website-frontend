import React, { Component } from 'react'
import Link from 'next/link'

import EntryDisplay from '../../components/entry_display'
import EntryModal from '../../components/entry_modal'
import parseCookies from '../../helpers/parse_cookies'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'

import styles from '../../styles/Blog/index.module.css'


const initialState = {
  isAdmin: false,
  entryType: 'signup',
}


class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...initialState,
    }
  }

  setAdmin = admin => {
    this.setState({
      isAdmin: admin,
    })
  }

  setEntryType = entryType => {
    this.setState({
      entryType: entryType,
    })
  }

  render() {
    const { isAdmin, entryType } = this.state
    const { posts } = this.props

    return (
      <div>
        <EntryDisplay entryType={entryType} setEntryType={this.setEntryType} />
        <EntryModal entryType={entryType} setEntryType={this.setEntryType} setAdmin={this.setAdmin} />
        {posts.map(post => (
          <article className={styles.post} key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <a><h3>{post.title}</h3></a>
            </Link>
            <h6>{post.updated_at}</h6>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    )
  }
}

export default Blog


export const getServerSideProps = async ({ req }) => {
  const cookieData = parseCookies(req)

  const posts = await fetch(`${BACKEND_DOMAIN}/posts`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const postsJSON = await posts.json()

  return {
    props: {
      cookieData,
      posts: Array.from(postsJSON)
    }
  }
}

