import { useHistory } from 'react-router-dom'


export default function Home() {
  let history = useHistory()

  function handleSignIn() {
    history.push("/login")
  }
  return(
    <div>
      <button type='button' onClick={handleSignIn} >
        fazer login
      </button>
    </div>
  )
}