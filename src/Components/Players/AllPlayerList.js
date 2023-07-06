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
    <div className="allPlayerList grid grid-cols-6 p-8 gap-4">
      {filteredPlayers.map((player) => (
        <div onClick={(e)=>handleClick(e)} key={Math.random() * 1000} id={player.longName} className="playerCard text-center outline outline-1 p-10">
          <h4 className="content pointer-events-none">{player.longName}</h4>
        </div>
      ))}
    </div>
  );
};

export default AllPlayerList;
