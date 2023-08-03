import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../../src/assets/images/user.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.userPhoto}
          src={profile.photos.large == null ? userPhoto : profile.photos.large}
          alt='UserPhoto'
        />
        <h1>{profile.fullName}</h1>
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
