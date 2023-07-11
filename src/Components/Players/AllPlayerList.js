import './allPlayer.css';
import { useNavigate } from 'react-router-dom';

const AllPlayerList = ({ players, query }) => {
  const navigate = useNavigate();
  const filterPlayerCards = (player) => {
    const { longName } = player;
    return longName.toLowerCase().includes(query.toLowerCase());
  };

  const filteredPlayers = players.filter(filterPlayerCards);
  
  const handleClick = (e) =>{
    navigate(`/player?query=${e.target.id}`);
  }
  return (
    <div className="allPlayerList grid gap-4 p-3 md:grid-cols-3 md:p-8   md:gap-4 lg:grid-cols-6 lg:p-8 lg:gap-4">
      {filteredPlayers.map((player) => (
        <div onClick={(e)=>handleClick(e)} key={Math.random() * 1000} id={player.longName} className="playerCard text-center outline outline-1 p-10">
          <h4 className="content pointer-events-none">{player.longName}</h4>
        </div>
      ))}
    </div>
  );
};

export default AllPlayerList;
