import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/images/userPhoto.jpg'
import { NavLink } from 'react-router-dom';

let User = ({ user, followingIsProgress, unfollow, follow }) => {
   return (
      <div className={styles.userBlock}>
         <div>
            <NavLink to={'/profile/' + user.id}>
               <img src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={styles.photo} />
            </NavLink>
            <div>
               {user.followed
                  // some() - если хоть одна id совпадет с user.id - disabled
                  ? <button disabled={followingIsProgress
                     .some(id => id == user.id)}
                     onClick={() => { unfollow(user.id) }} >Unfollow</button>

                  : <button disabled={followingIsProgress
                     .some(id => id == user.id)}
                     onClick={() => { follow(user.id) }}>Follow</button>}
            </div>
         </div>
         <div>
            <p>{user.name}</p>
            <p>{user.status}</p>
            <p>{user.id}</p>
            <p>{user.followed}</p>
            <p>{"user.location.city"}</p>
            <p>{"user.location.country"}</p>
         </div>
      </div>
   )
}

export default User;
