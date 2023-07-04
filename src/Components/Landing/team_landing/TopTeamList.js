import Atropos from 'atropos/react';
import { useNavigate } from 'react-router-dom';
import './TopTeam.css';
const TopTeamList= () => {
  const navigate = useNavigate();
  const data = {
    teams:['golden_state','bucks','lakers'],
    imgs:{
      golden_state:'https://wallpapercave.com/wp/wp11415269.jpg',
      bucks:'https://wallpaperaccess.com/full/1743602.jpg',
      lakers:'https://images3.alphacoders.com/971/971322.jpg',
    }
  }

  const handleClick = (e) =>{
    navigate(`/player?query=${e.target.id}`)
  }

  return (
    <div className="tt_grid grid grid-cols-3 gap-20">
      {data.teams.map( team =>(
        <div key={team} id={team} onClick={(e)=>handleClick(e)}  className="teams">
          <Atropos 
            activeOffset={40} 
            shadowScale={1.05}
            className='team' >
            <img className='w-full h-full object-cover rounded-xl' src={data.imgs[team]} alt="" />
          </Atropos>
        </div>
      ))}
    </div>
  );
}
 
export default TopTeamList;