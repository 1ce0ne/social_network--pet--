import styles from './Users.module.css';
import userPhoto from '../../../src/assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

const User = ({ user, ...props }) => {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt='UserPhoto'
              className={styles.photo}
            />
          </NavLink>
        </div>
        <span>
          <div>
            <b>{user.name}</b>
          </div>
          <div>{user.status}</div>
        </span>
        <div>
          {user.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <br />
    </div>
  );
};

export default User;
