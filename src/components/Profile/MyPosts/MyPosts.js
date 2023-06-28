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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
      </div>
    </div>
  )
}

export default MyPosts;