import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { follow, setCurrentPage, unfollow } from '../../redux/usersReducer';
import { toggleFollowingProgress, requestUsers } from '../../redux/usersReducer';
import { getUsers, getCurrentPage } from '../../redux/usersSelectors';
import { getPageSize, getTotalUsersCount } from '../../redux/usersSelectors';
import { getFollowingInProgress, getIsFetching } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          setCurrentPage={this.props.setCurrentPage}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
