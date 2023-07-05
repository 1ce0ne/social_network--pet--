import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.navbarPage} />
      <div className='app-wrapper-content'>
        <Routes> 
          <Route path='/profile'
            element=<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} /> />
          <Route path='/dialogs/*'
            element=<Dialogs state={props.state.messagesPage} dispatch={props.dispatch} /> />
          <Route path='/news' element=<News /> />
          <Route path='/music' element=<Music /> />
          <Route path='/settings' element=<Settings /> />
        </Routes>
      </div>
    </div>
  );
}

export default App;