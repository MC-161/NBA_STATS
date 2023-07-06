import React, { useEffect, useState } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import desktopLanding from '../assets/kobe_landing.png';
import mobileLanding from '../assets/kobe_mobile.jpeg';
import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 658);
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (e) => {
    navigate(`/player?query=${e.target.id}`);
  }

  const backgroundImage = isMobile ? mobileLanding : desktopLanding;

  return (
    <Parallax bgImage={backgroundImage}>
      <div className="home">
        <img className='landingImg' src={backgroundImage} alt="" />
        <div className='kobe_stats animate-pulse'>
          <p className='kTitle'>Kobe Bryant</p>
          <p className='kBirth'>1978-2020</p>
          <p>Mamba</p>
          <motion.div className="link" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8}}>
            <button id='kobe' onClick={(e)=>handleClick(e)} className='rounded-lg'> All Time Stats</button>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
}

export default Home;
