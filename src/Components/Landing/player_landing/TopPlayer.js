import React, { useEffect, useState } from 'react';
import './TopPlayer.css';
import TopPlayerList from './TopPlayerList';
import TopPlayerListMobile from './TopPlayerListMobile';

const TopPlayer = () => {
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
    <div className="topPlayer">
      <div className="tp_div">
        <p className="tp_Title text-2xl pt-5">Top Player</p>
        <div className="tp_Grid_Container flex justify-center p-8">
          {isMobile ? <TopPlayerListMobile /> : <TopPlayerList />}
        </div>
      </div>
    </div>
  );
};

export default TopPlayer;
