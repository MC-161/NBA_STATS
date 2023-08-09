import { useEffect, useState } from 'react';

const useFetchFakeAllT = () => {
  const [teams, setTeams] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:8002/body');
        const data = await response.json();
        setTeams(data);
        setIsPending(false)
      } catch (error) {
        console.error('Error fetching teams:', error);
        setIsPending(false)
        setError(error.message)
      }
    };

    fetchTeams();
  }, []);

  return {teams, isPending, error};
};

export default useFetchFakeAllT;
