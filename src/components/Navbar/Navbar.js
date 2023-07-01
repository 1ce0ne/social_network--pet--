import Friend from './Friend/Friend';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : undefined} to='/profile'>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : undefined} to='/dialogs'>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : undefined} to='/news'>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : undefined} to='/music'>Music</NavLink>
      </div>
      <br />
      <div className={styles.item}>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : undefined} to='/settings'>Settings</NavLink>
      </div>
      <br />
      <h3 className={styles.h3}>Friends online</h3>
      {props.state.friendsData.map(friend => <Friend key={friend.id} name={friend.name} avatar={friend.avatar} />)}

    </nav>
  )
}

export default Navbar;