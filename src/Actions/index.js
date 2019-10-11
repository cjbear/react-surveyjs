import axios from 'axios';
import * as firebase from 'firebase';
import _ from 'lodash';
import History from './../History';

import { 
  SIGN_IN, 
  SIGN_OUT,
  CREATE_ASSESSMENT,
  LIST_ASSESSMENTS,
  EDIT_ASSESSMENT ,
  DELETE_ASSESSMENT,
  SHOW_ASSESSMENT 
} from './Types';


//Authentication Actions*****************

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};


//Assessments ****************

export const createAssessment = formValues => async (dispatch, getState ) => {
  const { userId } = getState().auth;
  const id = firebase.database().ref().child('posts').push().key;
  const response = await axios.post('/assessments.json', {...formValues, id, userId }); //connects user who created assessment to formValues

  dispatch({ type: CREATE_ASSESSMENT, payload: response.data })
  History.push('/assessments');

};

export const listAssessments = () => async dispatch => {
  const response = await axios.get('/assessments.json');

  dispatch({ type: LIST_ASSESSMENTS, payload: response.data })
};

export const showAssessment = (id) => async dispatch => {
  const response = await axios.get(`/assessments/${id}.json`);

  dispatch({ type: SHOW_ASSESSMENT, payload: response.data })
};

export const editAssessment = (id, formValues) => async dispatch => {
  const response = await axios.patch(`/assessments/${id}.json`, formValues);

  dispatch({ type: EDIT_ASSESSMENT, payload: response.data })
  History.push('/assessments');
};

export const deleteAssessment = (id) => async dispatch => {
  await axios.delete(`/assessments/${id}.json`);

  dispatch({ type: DELETE_ASSESSMENT, payload: id });
};

export const selectAssessment = (assessment) => {
  return {
    type: 'ASSESSMENT_SELECTED',
    payload: assessment
  };
};

export const getBarriers = () => async dispatch => {
    const barriers = await axios.get('/barriers');

    dispatch({ type: 'GET_BARRIERS', payload: barriers })
  };

export const getPostsAndUsers = () => async (dispatch, getState) => {

  await dispatch(getPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach( id => dispatch(getUser(id)));
};

export const getPosts = () => async dispatch => {
    const posts = await axios.get('/Posts.json');

    dispatch({ type: 'GET_POSTS', payload: posts.data })
  };

export const getUser = id => async dispatch => { 
  const response = await axios.get(`/users/${id}.json`);

  dispatch({ type: 'GET_USER', payload: response.data });

};

//export const getUser = id => dispatch => {
//  _getUser(id, dispatch);
//};
//const _getUser = _.memoize(async (id, dispatch) => {

//const response = await axios.get(`/users/${id}.json`);

//dispatch({ type: 'GET_USER', payload: response.data });

//});