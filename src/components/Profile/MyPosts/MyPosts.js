import styles from './MyPosts.module.css';
import PostsReduxForm from './Form/PostsReduxForm';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  let addNewPost = (formData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts:</h3>

      <PostsReduxForm onSubmit={addNewPost} />

      <div className={styles.posts}>
        {props.profilePage.postsData.map((post) => (
          <Post key={post.id} message={post.message} likesCount={post.likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
