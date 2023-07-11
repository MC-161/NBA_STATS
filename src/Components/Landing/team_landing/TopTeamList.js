import Atropos from 'atropos/react';
import { useNavigate } from 'react-router-dom';
import './TopTeam.css';
const TopTeamList= () => {
  const navigate = useNavigate();
  const data = {
    teams:['GS','MIL','LAL'],
    imgs:{
      GS:'https://wallpapercave.com/wp/wp11415269.jpg',
      MIL:'https://wallpaperaccess.com/full/1743602.jpg',
      LAL:'https://images3.alphacoders.com/971/971322.jpg',
    }
  }

  const handleClick = (e) =>{
    const classNames = e.target.className.split(' '); // Split the class names by whitespace
    const secondClassName = classNames[1]; // Get the second class name
    navigate(`/team?query=${secondClassName}`);
  }

  return (
    <div className="tt_grid grid grid-cols-3 gap-20">
      {data.teams.map( team =>(
        <div key={team} id={team} onClick={(e)=>handleClick(e)}  className="teams">
          <Atropos 
            scaleClassName={team}
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