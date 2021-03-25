import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newPost } from '../redux/actions/postActions'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'


const initialState = {
  title: '',
  content: '',
}


class NewPostForm extends Component {
  state = {
    ...initialState,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { newPost, toggleNewPostForm } = this.props

    newPost(this.state)

    this.setState({
      ...initialState,
    })

    toggleNewPostForm()
  }

  render() {
    const { styles, hideForm } = this.props
    const { title, content } = this.state

    return (
      <form id='newPostForm' className={styles.popupForm} onSubmit={this.handleSubmit}>
        <input id='newPostFormTitle' className={styles.formInput} type='text' name='title' value={title} onChange={this.handleChange} />
        <textarea id='newPostFormContent' className={styles.formInput} name='content' value={content} onChange={this.handleChange} />
        <button className={styles.formSubmitButton} type='submit'>Create Post</button>
        <button className={styles.cancelButton} type='button' onClick={hideForm}>Cancel</button>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    newPost: ({ ...newFormInfo }) => dispatch(newPost(newFormInfo)),
  }
}


export default connect(null, mapDispatchToProps)(NewPostForm)
