import { useState } from 'react';

import history from '../../history.js';
import { api } from '../../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [doctorName, setDoctorName] = useState('');

  const onSubmit = (value: any) => {
    api
      .post('/login', value)
      .then(function response(response) {
        localStorage.setItem('token', response.data.token);

        setDoctorName(response.data.name);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        setAuthenticated(true);

        history.push('/consultation');
      })
      .catch(function errors(error) {
        console.log(error);
      });
  };

  const handleLogOut = () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    setDoctorName('');
    history.push('/login');
  };

  return {
    onSubmit,
    handleLogOut,
    authenticated,
    doctorName,
    setAuthenticated,
  };
}
