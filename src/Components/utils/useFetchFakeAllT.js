import { useEffect, useState } from 'react';
import database from '../../firebase';
import { get, ref, onValue } from 'firebase/database'; // Import from firebase/database

const useFetchFirebaseAllTeams = () => {
  const [teams, setTeams] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsRef = ref(database, 'teams/body'); // Reference to the 'body' element under 'teams' node
        onValue(teamsRef, (snapshot) => {
          const data = snapshot.val();
          setTeams(data);
          setIsPending(false);
        });
      } catch (error) {
        console.error('Error fetching teams:', error);
        setIsPending(false);
        setError(error.message);
      }
    };

    fetchTeams();
  }, []);

  return { teams, isPending, error };
};

export default useFetchFirebaseAllTeams;
