import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../../src/assets/images/user.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.userPhoto}
          src={
            props.profile.photos.large == null ? userPhoto : props.profile.photos.large
          }
          alt='UserPhoto'
        />
        <h1>{props.profile.fullName}</h1>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
