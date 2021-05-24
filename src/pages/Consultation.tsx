
import { useEffect, useState } from 'react'
import { api } from '../services/api'


export default function Consultation() { 
  const [patients, setPatients] = useState([])

  useEffect(()=> {
    (async () => {
      const { data } = await api.get('/consultations?_expand=patient')
      
      setPatients(data)
      console.log(data)
    })();

  }, [])


  return (
    <div>teste</div>
  )
  
}