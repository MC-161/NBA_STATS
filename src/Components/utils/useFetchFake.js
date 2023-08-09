import { useEffect, useState } from "react";

const useFetchFake = (playerName) => {
  const [playerInfo, setPlayerInfo] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo?playerName=${playerName}&statsToGet=totals`;
  
  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setPlayerInfo(result);
        setIsPending(false);
      } catch (error) {
        console.error('Error fetching Player info: ', error);
        setIsPending(false);
        setError(error.message);
      }
    };
    fetchPlayer();
  }, [playerName]);

  return { playerInfo, isPending, error };
};

export default useFetchFake;