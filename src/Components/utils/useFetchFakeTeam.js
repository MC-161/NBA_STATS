import { useEffect, useState } from 'react';
import database from '../../firebase';
import { ref, onValue } from 'firebase/database';

const useFetchFakeTeam = (teamAbbreviation) => {
  const [teamObject, setTeamObject] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const teamsRef = ref(database, 'teams/body'); // Reference to the 'body' element under 'teams' node

        onValue(teamsRef, (snapshot) => {
          const data = snapshot.val();

          if (data) {
            const teams = Object.values(data);

            // Assuming the response contains an array of team objects
            const foundTeam = teams.find((team) => team.teamAbv === teamAbbreviation);

            setTeamObject(foundTeam);
          }
          setIsPending(false);
        });
      } catch (error) {
        console.error('Error fetching team:', error);
        setIsPending(false);
        setError(error.message);
      }
    };

    fetchTeam();
  }, [teamAbbreviation]);

  return { teamObject, isPending, error };
};

export default useFetchFakeTeam;
