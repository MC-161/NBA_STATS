import './Home.css';
import { motion } from "framer-motion"
import desktopLanding from '../assets/kobe_landing.png'
const Home = () => {
  return (
    <div className="home">
      <img className='landingImg' src={desktopLanding} alt="" />
      <div className='kobe_stats'>
        <p className='kTitle'>Kobe Bryant</p>
        <p className='kBirth'>1978-2020</p>
        <p>Mamba</p>
        <motion.div className="link" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8}}>
          <button className='rounded-lg'> All Time Stats</button>
        </motion.div>
      </div>
    </div>
  );
}
 
export default Home;