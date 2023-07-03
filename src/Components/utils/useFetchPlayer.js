import { useEffect, useState } from "react";

const useFetchPlayer = (player) => {
  const [playerInfo, setPlayerInfo] = useState('')
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo?playerName=${player}&statsToGet=totals`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c3fb093a86mshbd0ee4dca6b6d7cp146aa9jsn9d452d08c083',
      'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
    }
  };
  useEffect(() =>{
    const fetchPlayer = async() => {
      try{
        const response = await fetch(url,options)
        const result = await response.json();
        setPlayerInfo(result)
        setIsPending(false)
      }catch{
        console.error('Error fetching Player info: ', error);
        setIsPending(false);
        setError(error.message);
      }
    }
    fetchPlayer()
  },[player])

  return {playerInfo, isPending};
}
 
export default useFetchPlayer;