import { useNavigate } from "react-router-dom";

const AllTeamList = ({teams, query}) => {
  const navigate = useNavigate()
  const filterTeamCards = (team) => {
    const { teamName, teamCity } = team;
    const searchString = `${teamCity} ${teamName}`.toLowerCase();
    return searchString.includes(query.toLowerCase());
  };

  const filteredTeams = teams.filter(filterTeamCards);
  
  const handleClick = (e) =>{
    navigate(`/team?query=${e.target.id}`);
  }
  return (
    <div className="allPlayerList grid gap-4 p-3 md:grid-cols-3 md:p-8   md:gap-4 lg:grid-cols-6 lg:p-8 lg:gap-4">
      {filteredTeams.map((team) => (
        <div onClick={(e)=>handleClick(e)} key={Math.random() * 1000} id={team.teamAbv} className="playerCard text-center outline outline-1 p-10">
          <h4 className="content pointer-events-none">{team.teamCity} {team.teamName}</h4>
        </div>
      ))}
    </div>
  );
}
 
export default AllTeamList;