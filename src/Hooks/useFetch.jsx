import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setIsPending(true);
      fetch(url, {
          method: 'get', 
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then(response => {
          if(!response.ok){
            console.log('issue')
            throw new Error(response.statusText)
          } else {
            console.log('ok')
            return response.json()
          }
        }) 
      .then(data => { 
            console.log('setting data')
          setIsPending(false);
          setData(data.data);
          setError(null);
        })
      .catch((error) => {
          setError(`${error} Could not Fetch Data`);
          setIsPending(false);
        });
      }
    fetchData
  }, [url])

  return { data, isPending, error };
}

export { useFetch }
