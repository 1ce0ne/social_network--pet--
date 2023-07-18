import styles from './Users.module.css'
import userPhoto from '../../../src/assets/images/user.png'

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
          return <span className={(props.currentPage === p) && styles.selectedPage}
            onClick={(e) => { props.onPageChanged(p) }}>{p + ' '}</span>
        })}
      </div>

      {props.users.map(user => <div key={user.id}>
        <span>
          <div>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="UserPhoto" className={styles.photo} />
          </div>
          <div>
            {user.followed
              ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(user.id) }}>Follow</button>
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