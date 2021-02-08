import React, { Component } from 'react'

import EntryDisplay from '../components/entry_display'
import EntryModal from '../components/entry_modal'
import BlogDisplay from '../components/blog_display'
import parseCookies from '../helpers/parse_cookies'


const initialState = {
  isAdmin: false,
  entryType: 'login',
}


class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...initialState,
    }
  }

  getInitialProps = async ({ req }) => {
    const data = parseCookies(req)

    const posts = await fetch(`${BACKEND_DOMAIN}/posts`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const postsJSON = await posts.json()

    return {
      data: data,
      posts: Array.from(postsJSON)
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
    const { data, posts } = this.props
    const { isAdmin, entryType, view } = this.state

    return (
      <div>
        <EntryDisplay entryType={entryType} setEntryType={this.setEntryType} />
        <EntryModal entryType={entryType} setEntryType={this.setEntryType} data={data} setAdmin={this.setAdmin} />
        <BlogDisplay isAdmin={isAdmin} posts={posts} />
      </div>
    )
  }
}

export default Blog
