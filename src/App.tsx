import { useEffect, useState } from "react";
// import axios from 'axios'

// const FAKE_TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZmFrZSB0b2tlbiJ9.-tvEhfr6_VHfKU9bumcmdvku-IfwZDz2LtjeqZOuH-g'

// const api = axios.create({
//   baseURL: 'https://localhost:3333'

// })

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = 
}

function App() {




  return (
    <>
      { person && <div>{person.name.first}</div>}
    </>
  );
}

export default App;
