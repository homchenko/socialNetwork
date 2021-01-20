import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";
import sidebarReduser from "./sidebar_reduser";
import usersReduser from "./users_reduser";
import authReduser from "./auth_reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from 'redux-form';
import appReduser from './app_reduser';
import { composeWithDevTools } from 'redux-devtools-extension';

let redusers = combineReducers({
   profilePage: profileReduser,
   dialogsPage: dialogsReduser,
   sidebar: sidebarReduser,
   usersPage: usersReduser,
   auth: authReduser,
   form: formReducer,
   app: appReduser
});

let store = createStore(redusers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store=store;

export default store;