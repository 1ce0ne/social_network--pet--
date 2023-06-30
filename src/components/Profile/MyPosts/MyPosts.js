import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi', likesCount: 25 },
    { id: 2, message: 'Hi, how are you?', likesCount: 13 },
    { id: 3, message: 'Anime is strong!', likesCount: 12 },
    { id: 4, message: 'I am Naruto', likesCount: 100 },
    { id: 5, message: 'Bobobobobobo', likesCount: 10000 },
    { id: 6, message: 'DxD', likesCount: 3 },
    { id: 7, message: '18+', likesCount: 69 },
  ]


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
        {postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)}
      </div>
    </div>
  )
}

export default MyPosts;