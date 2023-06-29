import './TopTeam.css'
import TopTeamList from './TopTeamList';
const TopTeam = () => {
  return (
    <div className="topTeam">
      <div className='tt_div'>
        <p className='tt_Title text-2xl pt-5'>Top Player</p>
        <div className='tt_Grid_Container flex justify-center p-10 '>
          <TopTeamList />
        </div>
        <div className='footer bg-gradient-to-r from-yellow-500 to-purple-500 text-white'>
          Made by @MC 
        </div>
      </div>
    </div>
  );
}
export default TopTeam;