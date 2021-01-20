import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import Paginator1 from '../../common/Paginator/Paginator1';

import User from './User';

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
   return (
      <div>
         <Paginator
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged} />
         <div>
            {users.map(u =>
               <User key={u.id}
                  user={u}
                  followingIsProgress={props.followingIsProgress}
                  unfollow={props.unfollow}
                  follow={props.follow}
               />)}
         </div>
      </div>
   )
}

export default Users;
