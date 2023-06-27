import { Link } from "react-router-dom";
import './Navbar.css';
import { motion } from "framer-motion"

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <p className="logo">NBA STATS</p>
        <div className='nav-links '>
          <motion.div className="link" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8, backgroundColor:"black"}}>
            <Link>Teams</Link>
          </motion.div>
          <motion.div className="link" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8, backgroundColor:"black"}}>
            <Link>Player</Link>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;