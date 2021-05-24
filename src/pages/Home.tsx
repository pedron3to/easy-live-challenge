import { useHistory } from 'react-router-dom'

function Home() {
  let history = useHistory()

  function handleSignIn() {
    history.push('/login')
  }
  return(
    <div>
      <button type='button' onClick={handleSignIn} >
        fazer login
      </button>
    </div>
  )
}

export default Home