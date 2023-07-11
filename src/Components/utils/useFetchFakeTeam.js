import { useEffect, useState } from 'react';

const useFetchFakeTeam = (teamAbbreviation) => {
  const [teamObject, setTeamObject] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:8002/body');
        const data = await response.json();
        // Assuming the response contains an array of team objects
        const teams = data;
        const foundTeam = teams.find(team => team.teamAbv === teamAbbreviation);
        setTeamObject(foundTeam);
        setIsPending(false)
      } catch (error) {
        console.error('Error fetching teams:', error);
        setIsPending(false)
        setError(error.message)
      }
    };

    fetchTeams();
  }, [teamAbbreviation]);

  return {teamObject, isPending, error};
};

export default useFetchFakeTeam;
