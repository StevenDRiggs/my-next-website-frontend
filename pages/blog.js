import React, { Component } from 'react'

import EntryDisplay from '../components/entry_display'
import EntryModal from '../components/entry_modal'
import BlogDisplay from '../components/blog_display'
import parseCookies from '../helpers/parse_cookies'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'


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
        <BlogDisplay isAdmin={isAdmin} {...posts} />
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

