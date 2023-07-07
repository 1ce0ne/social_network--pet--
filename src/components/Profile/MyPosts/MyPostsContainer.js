import StoreContext from '../../../StoreContext';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (<StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let updateNewPostText = (text) => {
          let action = updateNewPostTextActionCreator(text)
          store.dispatch(action)
        }

        return (<MyPosts updateNewPostText={updateNewPostText}
          addPost={addPost}
          postsData={state.profilePage.postsData}
          newPostText={state.profilePage.newPostText} />)
      }
    }
  </StoreContext.Consumer>)
}

export default MyPostsContainer;




// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
// import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let updateNewPostText = (text) => {
//     let action = updateNewPostTextActionCreator(text)
//     props.store.dispatch(action)
//   }

//   return (<MyPosts updateNewPostText={updateNewPostText}
//                    addPost={addPost}
//                    postsData={state.profilePage.postsData}
//                    newPostText={state.profilePage.newPostText} />)
// }

// export default MyPostsContainer;