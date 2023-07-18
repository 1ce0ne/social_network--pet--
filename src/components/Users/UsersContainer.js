import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC, setIsFetchingAC } from '../../redux/usersReducer';
import React from 'react';
import axios from 'axios';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';

// Контейнерная компонента, которая делает AJAX запрос
class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      }) 
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
    })
  }

  render() {   
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  onPageChanged={this.onPageChanged} />
    </>
  }
}

 
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {dispatch(followAC(userId))},
    unfollow: (userId) => {dispatch(unfollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
    setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
    toggleIsFetching: (isFetching) => {dispatch(setIsFetchingAC(isFetching))}
  }
}

// Контейнерная компонента, которая работает со store
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer); 