import './App.css';
import 'animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
       <div className="App">
        <NavBar/>
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<LandingPage/>}/>
            </Routes>
          </div>
       </div>
    </Router>
  );
}

export default App;
