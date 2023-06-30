import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  return (
    <div className={styles.postsBlock}>
      <h3>My posts:</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {props.postsData.map(post =>
          <Post message={post.message} likesCount={post.likesCount} />
        )}
      </div>
    </div>
  )
}

export default MyPosts;