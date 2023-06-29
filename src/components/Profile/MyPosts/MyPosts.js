import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        <Post message='Hi, how are you?' likesCount='25' />
        <Post message='Anime is strong!' likesCount='13'/>
      </div>
    </div>
  )
}

export default MyPosts;