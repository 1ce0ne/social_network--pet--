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
      <div className={styles.item}>
        <NavLink className={({ isActive }) => isActive ? styles.activeLink : undefined} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;