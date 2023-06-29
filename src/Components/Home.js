import React, { useEffect, useState } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import desktopLanding from '../assets/kobe_landing.png';
import mobileLanding from '../assets/kobe_mobile.jpeg';
import { Parallax } from 'react-parallax';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is a mobile
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|iphone|ipod|android|blackberry|opera mini|windows mobile|palm|iemobile|symbian/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const backgroundImage = isMobile ? mobileLanding : desktopLanding;

  return (
    <Parallax bgImage={backgroundImage}>
      <div className="home">
        <img className='landingImg' src={backgroundImage} alt="" />
        <div className='kobe_stats'>
          <p className='kTitle'>Kobe Bryant</p>
          <p className='kBirth'>1978-2020</p>
          <p>Mamba</p>
          <motion.div className="link" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8}}>
            <button className='rounded-lg'> All Time Stats</button>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
}

export default Home;
