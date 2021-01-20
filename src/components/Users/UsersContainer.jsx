import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage, 
   requestUsers, toggleFollowingProgress} from '../../redux/users_reduser';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getFollowingIsProgres, getIsFetching, 
   getPageSize, getTotalUsersCount, getUsers} from '../../redux/users_selectors';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.requestUsers(pageNumber, this.props.pageSize);
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingIsProgress={this.props.followingIsProgress}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingIsProgress: getFollowingIsProgres(state),
   }
}

export default compose(connect(mapStateToProps, {
   follow, unfollow, setCurrentPage, 
   requestUsers, toggleFollowingProgress})
)(UsersContainer);