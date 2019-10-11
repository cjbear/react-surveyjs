import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form';

import assessmentReducer from './assessmentReducers';
import postReducer from './postReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';



export default combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  form: formReducer,
  assessments: assessmentReducer,
  posts: postReducer,
  users: usersReducer,

});
