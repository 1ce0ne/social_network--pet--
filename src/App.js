import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { StrictMode } from 'react';

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  });

  if (!props.initialized) return <Preloader />;
  else
    return (
      <StrictMode>
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/:userId' element=<ProfileContainer /> />
              <Route path='/profile' element=<ProfileContainer /> />
              <Route path='/dialogs/*' element=<DialogsContainer /> />
              <Route path='/users' element=<UsersContainer /> />
              <Route path='/login' element=<Login /> />
              <Route path='/news' element=<News /> />
              <Route path='/music' element=<Music /> />
              <Route path='/settings' element=<Settings /> />
            </Routes>
          </div>
        </div>
      </StrictMode>
    );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
