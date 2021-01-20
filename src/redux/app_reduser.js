import { getAuthUserData } from "./auth_reduser";

const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';

let initialState = {
   initialized: false
};

const appReduser = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCSESS: {
         return {
            ...state,
            initialized: true
         }
      }
      default: return state;
   }
}

//Action Creators
export const initializedSuccsess = () => ({ type: INITIALIZED_SUCCSESS });

//thunks Creators
export const initializeApp = () => (dispatch) => {
   //promis from auth_reducer
   let promise = dispatch(getAuthUserData());
   promise.then(() => {
      dispatch(initializedSuccsess());
   })
}

export default appReduser;