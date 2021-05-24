import { FormEvent, useState } from "react";
import { api }  from '../services/api';
import { useHistory } from "react-router-dom";
import {
  Switch,
  Link
} from "react-router-dom";


function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  let history = useHistory()


 function handleSubmit(event:FormEvent) {

    event.preventDefault();

    (function HandleLogin() {
      api.post('/login', {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    })()

 

    setEmail('')
    setPassword('')

    history.push("/consultation")

  }


  return (
    <Switch>
      <form onSubmit={handleSubmit}>
        <input 
        type='email' 
        name='email' 
        placeholder='Digite seu email'
         onChange={(event) => setEmail(event.target.value)}
        />

        <input 
          type='password' 
          placeholder='digite sua senha'
          onChange={(event) => setPassword(event.target.value)}
        />
        <Link to="/consultation">

          <button type='submit'>entrar</button>
        </Link>
      </form>

      
    </Switch> 
  ); 
}

export default Login;
