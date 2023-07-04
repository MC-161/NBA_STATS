import './App.css';
import 'animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navigation/Navbar';
import LandingPage from './Landing/LandingPage';
import PlayerStats from './Players/PlayerStats';
import PlayerPage from './Players/PlayerPage';

function App() {
  return (
    <Router>
       <div className="App">
        <NavBar/>
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<LandingPage/>}/>
              <Route exact path='/player' element={<PlayerPage/>}/>
            </Routes>
          </div>
       </div>
    </Router>
  );
}

export default App;
