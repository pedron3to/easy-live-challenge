import { useEffect, useState } from 'react';

import history from '../../history.js';
import { api } from '../../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem('token'),
  );

  const [doctorName, setDoctorName] = useState(localStorage.getItem('doctor'));

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, []);

  const onSubmit = (value: any) => {
    api
      .post('/login', value)
      .then(function response(response) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('doctor', response.data.name);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        setAuthenticated(true);
        setDoctorName(response.data.name);

        console.debug('data', response.data);
        history.push('/consultation');
      })
      .catch(function errors(error) {
        console.log(error);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('doctor');

    setAuthenticated(false);
    setDoctorName('');

    api.defaults.headers.Authorization = undefined;

    history.push('/login');
  };

  return {
    onSubmit,
    handleLogOut,
    authenticated,
    setAuthenticated,
    doctorName,
  };
}
