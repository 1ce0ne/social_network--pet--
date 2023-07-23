import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        alt='Avatar'
        src='https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-94.jpg'
      ></img>
      {props.message}
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
};

export default Post;
