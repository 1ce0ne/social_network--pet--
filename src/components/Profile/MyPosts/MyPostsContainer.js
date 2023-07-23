import { connect } from 'react-redux';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
