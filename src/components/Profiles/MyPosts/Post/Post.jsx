import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
   return (
      <div className={style.item}>
         <img src='https://i1.7fon.org/thumb/g455581.jpg' />
         {props.message}
         <div>
            <span>{props.likesCount} like</span>
         </div>
      </div>
   );
}

export default Post;