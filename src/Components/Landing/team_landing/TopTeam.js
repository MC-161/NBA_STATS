import './TopTeam.css'
import TopTeamList from './TopTeamList';
import TopTeamListMobile from './TopTeamListMobile';
import { useState, useEffect } from 'react';
const TopTeam = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="topTeam">
      <div className='tt_div text-center'>
        <p className='tt_Title text-2xl pt-5'>Top Teams</p>
        <div className='tt_Grid_Container flex justify-center p-8' >
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