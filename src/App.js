import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' Component={Profile} />
            <Route path='/dialogs' Component={Dialogs} />
            <Route path='/news' Component={News} />
            <Route path='/music' Component={Music} />
            <Route path='/settings' Component={Settings} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;