import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC } from "../../redux/usersReducer";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage 
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {dispatch(followAC(userId))},
    unfollow: (userId) => {dispatch(unfollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
    setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))}
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users); 

export default UsersContainer;