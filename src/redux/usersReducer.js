import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/other/objectHelpers';

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET_USERS';
const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersPage/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersPage/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersPage/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', { followed: false }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

// getUsersThunkCreator
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

// followThunkCreator
export const follow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
};

// unfollowThunkCreator
export const unfollow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
};

export default usersReducer;
