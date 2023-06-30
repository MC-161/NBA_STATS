import Atropos from 'atropos/react';
import './TopPlayer.css';
const TopTeamList= () => {
  const data = {
    teams:['golden_state','bucks','lakers'],
    imgs:{
      golden_state:'https://wallpapercave.com/wp/wp11415269.jpg',
      bucks:'https://wallpaperaccess.com/full/1743602.jpg',
      lakers:'https://images3.alphacoders.com/971/971322.jpg',
    }
  }
  return (
    <div className="tt_grid grid grid-cols-3 gap-20">
      {data.teams.map( team =>(
        <div key={team} className="teams">
          <Atropos 
            activeOffset={40} 
            shadowScale={1.05}
            className='team cursor-pointer' >
            <img className='w-full h-full object-cover rounded-xl' src={data.imgs[team]} alt="" />
          </Atropos>
        </div>
      ))}
    </div>
  );
}
 
export default TopTeamList;