import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { required, maxLengthCreators } from './../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const MyPosts = (props) => {

   let postElements = props.posts.map((e) => {
      return <Post message={e.message} likesCount={e.likesCount} />
   })

   const onAddPost = (values) => {
      props.addPost(values.newPostText);
   }

   return (
      <div className={style.myposts}>
         <h3>My posts</h3>
         <AddNewPostFormRedux onSubmit={onAddPost} />
         <div className={style.posts}>{postElements}</div>
      </div>
   );
}

const maxLength = maxLengthCreators(10);
const AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               component={Textarea} 
               name='newPostText'
               placeholder='Post message'
               validate={[required, maxLength]} />
         </div>
         <div>
            <button>Add post</button>
         </div>
      </form>
   )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;
