import { useEffect, useState } from "react";

const useFetchFake = (player) => {
  const [playerInfo, setPlayerInfo] = useState('')
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const url =`http://localhost:8000/player`;
  useEffect(() =>{
    const fetchPlayer = async() => {
      try{
        const response = await fetch(url)
        const result = await response.json();
        setPlayerInfo(result[0])
        setIsPending(false)
      }catch{
        console.error('Error fetching Player info: ', error);
        setIsPending(false);
        setError(error.message);
      }
    }
    fetchPlayer()
  },[])

  return {playerInfo, isPending, error};
}
 
export default useFetchFake;