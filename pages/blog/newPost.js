import parseCookies from '../../helpers/parse_cookies'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'


const NewPost = props => {
  return (
    <div>
      {JSON.stringify(props)}
    </div>
  )
}


export default NewPost


export const getServerSideProps = async ({ req }) => {
  const cookieData = parseCookies(req)

  const response = await fetch(`/verifylogin`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '
    },
    body: JSON.stringify({
      token: cookieData.sessionInfo
    })
  })

  const verifiedAdmin = await response.json()

  return {
    props: {
      cookieData,
      verifiedAdmin: verifiedAdmin.verified
    }
  }
}
