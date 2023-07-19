import styles from './Users.module.css'
import userPhoto from '../../../src/assets/images/user.jpg'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    // Заглушка
    if (i < 25)
      pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span key={p-1} className={props.currentPage === p ? styles.selectedPage : ''}
            onClick={(e) => { props.onPageChanged(p) }}>{p + ' '}</span>
        })}
      </div>

      {props.users.map(user => <div key={user.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="UserPhoto" className={styles.photo} />
            </NavLink>
          </div>
          <div>
            {user.followed
              ? <button onClick={() => { 
                usersAPI.unfollowUser(user.id)
                  .then(data => {
                    if (data.resultCode === 0) {
                      props.unfollow(user.id) 
                    }
                  }) 
              }}>Unfollow</button>
              : <button onClick={() => { 
                usersAPI.followUser(user.id)
                  .then(data => {
                    if (data.resultCode === 0) {
                      props.follow(user.id)
                    }
                  }) 
              }}>Follow</button>
            }
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
      </div>)}
    </div>
  )
}

export default Users;