import { api }  from '../services/api';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { forwardRef } from 'react';


 const Login = forwardRef(() => {
  const {register, handleSubmit }= useForm();
  let history = useHistory()

 


    function HandleSignIn() {
     api.post('/login', {
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

   
    /* history.push("/consultation") */

    return (
        <form onSubmit={handleSubmit(HandleSignIn)}>
          <input 
            type='email' 
            name='email' 
            placeholder='Digite seu email'
            ref={register}
          />
          <input 
            type='password' 
            placeholder='digite sua senha'
            ref={register}

          />
            <button type='submit'>entrar</button>
        </form>
    ); 
 }) 


 export default Login

