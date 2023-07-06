import { useEffect, useState } from "react";

const useFetchFakeAllP = (player) => {
  const [players, setPlayers] = useState('')
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const url =`http://localhost:8001/body`;
  useEffect(() =>{
    const fetchPlayer = async() => {
      try{
        const response = await fetch(url)
        const result = await response.json();
        setPlayers(result)
        setIsPending(false)
      }catch{
        console.error('Error fetching Player info: ', error);
        setIsPending(false);
        setError(error.message);
      }
    }
    fetchPlayer()
  },[])

  return {players, isPending, error};
}
 
export default useFetchFakeAllP;