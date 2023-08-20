import { useEffect, useState } from 'react';
import database from '../../firebase';
import { get, ref, onValue } from 'firebase/database'; // Import from firebase/database

const useFetchFakeAllP = () => {
  const [players, setPlayers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playersRef = ref(database, 'players/body'); // Reference to the 'body' element under 'players' node
        onValue(playersRef, (snapshot) => {
          const data = snapshot.val();
          setPlayers(data);
          setIsPending(false);
        });
      } catch (error) {
        console.error('Error fetching players:', error);
        setIsPending(false);
        setError(error.message);
      }
    };

    fetchPlayers();
  }, []);

  return { players, isPending, error };
};

export default useFetchFakeAllP;
