import { api } from '../../services/api';
import history from '../../history';
import { useState } from 'react';



export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [doctorName, setDoctorName] = useState('')

  const onSubmit = (value: Object) => {

    api.post('/login', value)
      .then(function (response) {
        localStorage.setItem('token', response.data.token)

        setDoctorName(response.data.name)

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        setAuthenticated(true);

        console.log(authenticated)

        history.push('/consultation')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleLogOut = (event: any) => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    setDoctorName('')
    history.push('/login')

  }

  return { onSubmit, handleLogOut, authenticated, doctorName, setAuthenticated }
}

