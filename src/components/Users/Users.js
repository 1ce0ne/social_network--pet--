import styles from './Users.module.css'

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675266617_gas-kvas-com-p-saske-uchikha-art-risunok-2.jpg', followed: false, fullName: 'Саске Учиха', status: 'Не вернусь в Коноху!', location: { city: 'Коноха', country: 'Страна Огня' } },
      { id: 2, photoUrl: 'https://fikiwiki.com/uploads/posts/2022-02/1645027584_5-fikiwiki-com-p-kartinki-naruto-na-avu-5.jpg', followed: true, fullName: 'Наруто Узумаки', status: 'Саске, вернусь в Коноху!', location: { city: 'Коноха', country: 'Страна Огня' } },
      { id: 3, photoUrl: 'https://cm.author.today/content/2023/01/26/574c3f14027048dbbff6dec0bc2142d0.jpg', followed: true, fullName: 'Хината Хьюго', status: 'Люблю Наруто', location: { city: 'Коноха', country: 'Страна Огня' } },
    ])
  }

  return (
    <div>
      {props.users.map(user => <div key={user.id}>
        <span>
          <div>
            <img src={user.photoUrl} alt="UserPhoto" className={styles.photo} />
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
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </span>
      </div>)}
    </div>
  )
}

export default Users;