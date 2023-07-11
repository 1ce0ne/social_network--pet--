const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
  newPostText: 'Write here something'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 1 + state.postsData.map(post => post.id).at(-1),
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state, 
        newPostText: action.newText
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}

export default profileReducer;