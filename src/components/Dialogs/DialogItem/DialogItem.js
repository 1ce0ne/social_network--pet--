import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <NavLink to={`/dialogs/${props.id}`}>
        <div className={styles.item}>
          <img src={props.avatar} alt='User avatar' />
          {props.name}
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
