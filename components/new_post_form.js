import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newPost } from '../redux/actions/postActions'

import styles from '../styles/Blog/NewPostForm.module.css'

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
    const { title, content } = this.state

    return (
      <form id='newPostForm' className={styles.newPostForm} onSubmit={this.handleSubmit}>
        <input id='newPostFormTitle' type='text' name='title' value={title} onChange={this.handleChange} />
        <textarea id='newPostFormContent' name='content' value={content} onChange={this.handleChange} />
        <button type='submit'>Create Post</button>
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
