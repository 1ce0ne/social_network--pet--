import { profileAPI } from '../api/api';

const ADD_POST = 'profilePage/ADD-POST';
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE';
const SET_STATUS = 'profilePage/SET_STATUS';
const DELETE_POST = 'profilePage/DELETE_POST';

let initialState = {
  postsData: [
    { id: 1, message: 'Hi', likesCount: 25 },
    { id: 2, message: 'Hi, how are you?', likesCount: 13 },
    { id: 3, message: 'Anime is strong!', likesCount: 12 },
    { id: 4, message: 'I am Naruto', likesCount: 100 },
    { id: 5, message: 'Bobobobobobo', likesCount: 10000 },
    { id: 6, message: 'DxD', likesCount: 3 },
    { id: 7, message: '18+', likesCount: 69 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 1 + state.postsData.map((post) => post.id).at(-1),
        message: action.newPostBody,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

// getUserProfileThunkCreator
export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(data));
};

// getStatusThunkCreator
export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  let data = profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
