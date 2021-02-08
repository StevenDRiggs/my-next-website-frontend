const Post = props => {
  const { title, content } = this.props
    return (
      <article className={styles.post}>
        <h2>{title}</h2>
        <p>{content}</p>
      </article>
    )
}


export default Post
