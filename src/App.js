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
          <div className='headerLinks'>
            <a href="https://www.linkedin.com/in/calvin-han-24857614a/" className='links' target="_blank"><FaLinkedin></FaLinkedin></a>
            <a href="https://github.com/hankumin" className='links' target="_blank"><FaGithub></FaGithub></a>
          </div>
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
