import './App.css';
import 'animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navigation/Navbar';
import LandingPage from './Landing/LandingPage';
import PlayerPage from './Players/PlayerPage';
import AllPlayers from './Players/AllPlayers';
import TeamPage from './Team/TeamPage';
import AllTeams from './Team/AllTeam';
function App() {
  return (
    <Router>
       <div className="App">
        <NavBar/>
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<LandingPage/>}/>
              <Route exact path='/player' element={<PlayerPage/>}/>
              <Route exact path='/team' element={<TeamPage />}/>
              <Route exact path='/allPlayers' element={<AllPlayers/>}/>
              <Route exact path='/allTeams' element={<AllTeams/>}/>
            </Routes>
          </div>
       </div>
    </Router>
  );
}

export default App;
