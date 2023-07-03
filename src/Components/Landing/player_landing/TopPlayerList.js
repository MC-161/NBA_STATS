import Atropos from 'atropos/react';
import { useNavigate } from 'react-router-dom';

const TopPlayerList = () => {
  const navigate = useNavigate();
  const data = {
    players:['jokivic','Lebron','Giannis', 'Stephen_Curry'],
    imgs:{
      jokivic:'https://w0.peakpx.com/wallpaper/928/325/HD-wallpaper-nikola-jokic-mvp-2021.jpg',
      Lebron:'https://w0.peakpx.com/wallpaper/445/368/HD-wallpaper-lebron-james-los-angeles-lakers-forward-portrait-creative-art-american-basketball-player-nba-basketball-usa-national-basketball-association.jpg',
      Giannis:'https://wallpaperaccess.com/full/1291368.jpg',
      Stephen_Curry:'https://images7.alphacoders.com/982/982253.jpg',
    }
  }
  const handleClick = (e) =>{
    navigate(`/player?query=${e.target.id}`)
  }
  return (
    <div className="tp_grid grid grid-cols-4 gap-20">
      {data.players.map( player =>(
        <div key={player} id={player}  onClick={(e)=>handleClick(e)}  className="player">
          <Atropos 
            activeOffset={40}
            shadowScale={1.05}
            className='player pointer-events-none'>
            <img className='w-full h-full object-cover rounded-xl' src={data.imgs[player]} alt="" />
          </Atropos>
        </div>
      ))}
    </div>
  );
}
 
export default TopPlayerList;