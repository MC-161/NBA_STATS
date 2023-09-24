import Atropos from 'atropos/react';
import { useNavigate } from 'react-router-dom';

const TopPlayerList = () => {
  const navigate = useNavigate();
  const data = {
    players: ["Kevin Durant", "LeBron James", "Giannis Antetokounmpo", "Stephen Curry"],
    imgs: {
      "Kevin Durant": "https://wallpapers.com/images/hd/blue-kevin-durant-cool-8nod6bth5sn7cyu1.jpg",
      "LeBron James": "https://w0.peakpx.com/wallpaper/445/368/HD-wallpaper-lebron-james-los-angeles-lakers-forward-portrait-creative-art-american-basketball-player-nba-basketball-usa-national-basketball-association.jpg",
      "Giannis Antetokounmpo": "https://wallpaperaccess.com/full/1291368.jpg",
      "Stephen Curry": "https://images7.alphacoders.com/982/982253.jpg",
    },
  };
  
  const handleClick = (e) =>{
    const classNames = e.target.className.split(' '); // Split the class names by whitespace
    const secondClassName = classNames[1]; // Get the second class name
    const thirdClassName = classNames[2]; // Get the second class name
    navigate(`/player?query=${secondClassName} ${thirdClassName}`);
  }
  return (
    <div className="tp_grid grid grid-cols-4 gap-20">
      {data.players.map( player =>(
        <div key={player} id={player}  onClick={(e)=>handleClick(e)}  className="player">
          <Atropos 
            scaleClassName={player}
            activeOffset={40}
            shadowScale={1.05}
            className='player'>
            <img className='w-full h-full object-cover rounded-xl' src={data.imgs[player]} alt="" />
          </Atropos>
        </div>
      ))}
    </div>
  );
}
 
export default TopPlayerList;