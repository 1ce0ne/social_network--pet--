import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src='https://e7.pngegg.com/pngimages/301/302/png-clipart-japan-torii-idea-sticker-t-shirt-japan-logo-sticker.png' />
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
