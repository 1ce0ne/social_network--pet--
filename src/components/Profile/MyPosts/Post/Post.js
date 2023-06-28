import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.item}>
      <img src='https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-94.jpg'></img>
      post
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;