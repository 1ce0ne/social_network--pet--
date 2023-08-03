import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

// Start state:
let state = {
  postsData: [
    { id: 1, message: 'Hi', likesCount: 25 },
    { id: 2, message: 'Hi, how are you?', likesCount: 13 },
    { id: 3, message: 'Anime is strong!', likesCount: 12 },
    { id: 4, message: 'I am Naruto', likesCount: 100 },
    { id: 5, message: 'Bobobobobobo', likesCount: 10000 },
    { id: 6, message: 'DxD', likesCount: 3 },
    { id: 7, message: '18+', likesCount: 69 },
  ],
};

test('length of posts should be incremented', () => {
  // 1. Test data:
  let action = addPostActionCreator('Test post');
  // 2. Action:
  let newState = profileReducer(state, action);
  // 3. Expectation:
  expect(newState.postsData.length).toBe(8);
});

test('message of new post should be correct', () => {
  // 1. Test data:
  let action = addPostActionCreator('Test post');
  // 2. Action:
  let newState = profileReducer(state, action);
  // 3. Expectation:
  expect(newState.postsData[7].message).toBe('Test post');
});

test('after deleting length of messages should be decrement', () => {
  // 1. Test data:
  let action = deletePost(1);
  // 2. Action:
  let newState = profileReducer(state, action);
  // 3. Expectation:
  expect(newState.postsData.length).toBe(6);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
  // 1. Test data:
  let action = deletePost(1000);
  // 2. Action:
  let newState = profileReducer(state, action);
  // 3. Expectation:
  expect(newState.postsData.length).toBe(7);
});
