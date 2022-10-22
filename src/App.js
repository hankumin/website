import './App.css';
import MainPage from './components/MainPage/MainPage'
import Resume from './components/Resume/Resume'
import NavBar from './components/NavBar/NavBar'
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

export function App() {
  return (
    <div className='App'> 
      <header >
        <Router>
          <div className='NavigationBar'>
            <NavBar/>
          </div>
          <div style={{height: '100%'}}>
            <Routes>
              <Route exact={true} path='/website/' element={<MainPage/>} />
              <Route exact={true} path='/website/resume' element={<Resume/>} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
