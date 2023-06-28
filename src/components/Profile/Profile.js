import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src='https://i.pinimg.com/originals/c2/eb/c3/c2ebc3a14ab6cc8f750328fc84d68150.jpg'></img>
      </div>

      <div>
        Ava + description
        <img src='https://ae04.alicdn.com/kf/Sa27b6769d1464cd7871a425d8b8c2e34S.jpg'></img>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;