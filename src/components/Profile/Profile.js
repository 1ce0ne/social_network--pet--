import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData}
               newPostText={props.profilePage.newPostText} 
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost} />
    </div>
  )
}

export default Profile;