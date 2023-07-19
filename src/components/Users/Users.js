import styles from './Users.module.css'
import userPhoto from '../../../src/assets/images/user.jpg'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'd36d9890-a140-4a55-8c72-64f8dd9caac9'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(user.id) 
                    }
                  }) 
              }}>Unfollow</button>
              : <button onClick={() => { 
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'd36d9890-a140-4a55-8c72-64f8dd9caac9'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
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