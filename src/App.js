import './App.css';
import MainPage from './components/MainPage/MainPage'
import Resume from './components/Resume/Resume'
import NavBar from './components/NavBar/NavBar'
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className='App'> 
        <header >
          <Router>
            <div className='NavigationBar'>
              <NavBar/>
            </div>
            <div className = 'body'>
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
}

export default App;
