import './TopTeam.css'
import TopTeamList from './TopTeamList';
import TopTeamListMobile from './TopTeamListMobile';
const TopTeam = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="topTeam">
      <div className='tt_div'>
        <p className='tt_Title text-2xl pt-5'>Top Player</p>
        <div className='tt_Grid_Container flex justify-center p-10 '>
          {isMobile ? <TopTeamListMobile /> : <TopTeamList />}
        </div>
        <div className='footer bg-black text-white'>
          Made by @MC 
        </div>
      </div>
    </div>
  );
}
export default TopTeam;