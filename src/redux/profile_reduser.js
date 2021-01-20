import {usersAPI, profileAPI} from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   posts: [
     { id: "1", message: "Lorem ipsum", likesCount: "22" },
     { id: "2", message: "Lorem ipsum..", likesCount: "44" }
   ], 
   profile: null,
   status: ""
 };

const profileReduser = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return{
            ...state,
            posts:[...state.posts, {
               id: 5,
               message: action.newPostText,
               likesCount: 0}]
         }
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
      default: return state;
   }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => 
({type: SET_USER_PROFILE, profile});
export const setStatus = (status) =>({type: SET_STATUS, status});

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

export default profileReduser;