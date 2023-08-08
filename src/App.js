import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { useEffect, lazy, Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import ProfileContainer from './components/Profile/ProfileContainer';

// lazy loading:
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));

const App = (props) => {
  const catchAllUnhandledErrors = (reason, promise) => {
    alert('Some error occured');
  };

  useEffect(() => {
    props.initializeApp();
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);

    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    };
  });

  if (!props.initialized) return <Preloader />;
  else
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Navigate to='/profile' />} />
              <Route path='/profile/:userId' element=<ProfileContainer /> />
              <Route path='/profile' element=<ProfileContainer /> />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element=<Login /> />
              <Route path='/news' element=<News /> />
              <Route path='/music' element=<Music /> />
              <Route path='/settings' element=<Settings /> />
              <Route path='*' element=<div>404</div> />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;
