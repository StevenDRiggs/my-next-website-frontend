import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'


const DeletePost = props => {
  return (
    <div>
      Delete Post
      {props.slug}
    </div>
  )
}


export default DeletePost


export const getStaticPaths = async () => {
  const response = await fetch(`${BACKEND_DOMAIN}/posts`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const posts = await posts.json()

  const paths = posts.map(post => {
    params: post.slug
  })

  return {
    paths,
    fallback: false
  }
}
