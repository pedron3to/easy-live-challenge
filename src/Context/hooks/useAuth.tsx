import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';

interface LoginProps {
  email: string;
  password: string;
}

export default function useAuth() {  
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  let history = useHistory()

  
  function handleSubmit(event:FormEvent) {
    
    event.preventDefault();
    
    async function HandleLogin({ email, password}:LoginProps) {
      await api.post('login', {email, password})
    }
    
    history.push("/consultation")

    return HandleLogin({password, email})
  }

  return { password, setPassword, email, setEmail, handleSubmit }
}
