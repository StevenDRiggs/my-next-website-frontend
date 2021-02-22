import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updatePost } from '../redux/actions/postActions'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'


class EditPostForm extends Component {
  constructor(props) {
    super(props)

    const { title, content, slug } = props.post

    this.state = {
      title,
      content,
      slug,
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { updatePost, clearPost } = this.props

    updatePost(this.state)

    clearPost()
  }

  render() {
    const { title, content } = this.state
    const { styles } = this.props

    return (
      <form id='editPostForm' className={styles.editPostForm} onSubmit={this.handleSubmit}>
        <input id='editPostFormTitle' type='text' name='title' value={title} onChange={this.handleChange} />
        <textarea id='editPostFormContent' name='content' value={content} onChange={this.handleChange} />
        <button type='submit'>Update</button>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    updatePost: ({ slug, ...editFormInfo }) => dispatch(updatePost(slug, editFormInfo)),
  }
}


export default connect(null, mapDispatchToProps)(EditPostForm)
