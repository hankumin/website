import './App.css';
import MainPage from './components/MainPage/MainPage'
import Resume from './components/Resume/Resume'
import NavBar from './components/NavBar/NavBar'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

export function App() {
  return (
    <div className='App'> 
      <header >
        <div className='header'>
          <FaLinkedin></FaLinkedin>
          <FaGithub></FaGithub>
        </div>
      </header>
      <Router>
          <div className='NavigationBar'>
            <NavBar/>
          </div>
          <div>
            <Routes>
              <Route exact={true} path='/website/' element={<MainPage/>} />
              <Route exact={true} path='/website/resume' element={<Resume/>} />
            </Routes>
          </div>
      </Router>
      <footer>
        <div className='footer'></div>
      </footer>
    </div>
  );
}

export default App;
