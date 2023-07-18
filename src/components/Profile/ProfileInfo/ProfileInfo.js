import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../../src/assets/images/user.jpg'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={styles.descriptionBlock} >
        <img className={styles.userPhoto} 
             src={props.profile.photos.large == null ? userPhoto : props.profile.photos.large} />
        <h1>{props.profile.fullName}</h1>
        <p>{props.profile.aboutMe}</p>
      </div>
    </div>
  )
}

export default ProfileInfo;