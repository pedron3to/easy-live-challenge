
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export default function useGetPatients() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    (async () => {
      api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

      const { data } = await api.get('/consultations?_expand=patient')

      setPatients(data)
      console.log(data)
    })();

  }, [])

  return { setPatients, patients }
}