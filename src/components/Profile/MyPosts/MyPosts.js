import styles from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {

  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts:</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
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