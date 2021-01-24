import {usersAPI, profileAPI} from '../api/api';
const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

//стортовое значение state, будет использовано редьюсером
//в том случае, если в метод не "придет" значение state
let initialState = {
   posts: [
     { id: "1", message: "Lorem ipsum", likesCount: "22" },
     { id: "2", message: "Lorem ipsum..", likesCount: "44" }
   ], 
   //newPostText: 'newPostText-test',
   profile: null,
   status: ""
 };

const profileReduser = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return{
            ...state,
            //newPostText: "",
            posts:[...state.posts, {
               id: 5,
               message: action.newPostText,
               likesCount: 0}]
         }
      // case UPDATE_NEW_POST_TEXT:
      //    return{
      //       ...state,
      //       newPostText: action.newText
      //    }
      case SET_USER_PROFILE:
         return{
            ...state,
            profile: action.profile
         }
      case SET_STATUS:
         return{
            ...state,
            status: action.status
         }
      case SAVE_PHOTO_SUCCESS:
         return{
            ...state,
            profile: {...state.profile, photos: action.photos}
         }
      default: return state;
   }
}

//AC
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
// export const updateNewPostTextActionCreator = (text) => 
// ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => 
({type: SET_USER_PROFILE, profile});
export const setStatus = (status) =>({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

//thunk
export const getUserProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId).then(response => {
         dispatch(setUserProfile(response.data));
      });
   }
}

export const getStatus = (status) => {
   return (dispatch) => {
      profileAPI.getUserStatus(status).then(response => {
         //с сервера ответ приходит в иде строки, согласно документации,
         //а не объект json - потому в ответе только response.data
         dispatch(setStatus(response.data));
      });
   }
}

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status).then(response => {
         if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
         }
      });
   }
}

export const savePhoto = (file) => {
   return  async(dispatch) => {
      let response = await profileAPI.savePhoto(file);
      if(response.data.resultCode === 0) {
         dispatch(savePhotoSuccess(response.data.data.photos));
      }
   }
}

export default profileReduser;