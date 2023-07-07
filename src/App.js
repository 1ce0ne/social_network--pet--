import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile'
            element=<Profile /> />
          <Route path='/dialogs/*'
            element=<DialogsContainer /> />
          <Route path='/news' element=<News /> />
          <Route path='/music' element=<Music /> />
          <Route path='/settings' element=<Settings /> />
        </Routes>
      </div>
    </div>
  );
}

export default App;




// import './App.css';
// import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';
// import { Route, Routes } from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';


// const App = (props) => {
//   return (
//     <div className='app-wrapper'>
//       <Header />
//       <Navbar state={props.state.navbarPage} />
//       <div className='app-wrapper-content'>
//         <Routes>
//           <Route path='/profile'
//             element=<Profile store={props.store} /> />
//           <Route path='/dialogs/*'
//             element=<DialogsContainer store={props.store} /> />
//           <Route path='/news' element=<News /> />
//           <Route path='/music' element=<Music /> />
//           <Route path='/settings' element=<Settings /> />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;