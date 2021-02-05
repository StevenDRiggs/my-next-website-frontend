import React, { Component } from 'react'
import { render } from 'react-dom'

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

    return {
      data: data
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
    const { data } = this.props
    const { isAdmin, entryType, view } = this.state

    return (
      <div>
        <EntryDisplay entryType={entryType} setEntryType={this.setEntryType} />
        <EntryModal entryType={entryType} setEntryType={this.setEntryType} data={data} setAdmin={this.setAdmin} />
        <BlogDisplay isAdmin={isAdmin} />
      </div>
    )
  }
}

export default Blog
