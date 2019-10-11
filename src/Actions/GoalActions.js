
import axios from 'axios';
import _ from 'lodash';
import History from './../History';

import { 
  CREATE_GOAL,
  LIST_GOALS,
  EDIT_GOAL,
  DELETE_GOAL,
  SHOW_GOAL 
} from './Types';


export const createGoal = formValues => async (dispatch, getState ) => {
    const { userId } = getState().auth;
    const response = await axios.post('/goals.json', {...formValues, userId }); //connects user who created assessment to formValues
  
    dispatch({ type: CREATE_GOAL, payload: response.data })
    History.push('/goals');
  
  };
  
  export const listGoals = () => async dispatch => {
    const response = await axios.get('/goals.json');
  
    dispatch({ type: LIST_GOALS, payload: response.data })
  };
  
  export const showGoal = (id) => async dispatch => {
    const response = await axios.get(`/goals/${id}.json`);
  
    dispatch({ type: SHOW_GOAL, payload: response.data })
  };
  
  export const editGoal = (id, formValues) => async dispatch => {
    const response = await axios.put(`/goals/${id}.json`, formValues);
  
    dispatch({ type: EDIT_GOAL, payload: response.data })
    History.push('/goals');
  };
  
  export const deleteGoal = (key) => async dispatch => {
    await axios.delete(`/goals/${key}.json`);
  
    dispatch({ type: DELETE_GOAL, payload: key });
  };