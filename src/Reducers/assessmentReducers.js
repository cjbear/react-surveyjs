import _ from 'lodash';


import { 
  CREATE_ASSESSMENT,
  LIST_ASSESSMENTS,
  EDIT_ASSESSMENT,
  DELETE_ASSESSMENT,
  SHOW_ASSESSMENT 
} from './../Actions/Types';

export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_ASSESSMENT: 
      return { ...state, [action.payload.id]: action.payload };

    case LIST_ASSESSMENTS:
      return { ...state, ..._.mapKeys(action.payload, 'id')};

    case EDIT_ASSESSMENT:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_ASSESSMENT:
      return _.omit(state, action.payload);

    case SHOW_ASSESSMENT: 

      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;

  }
};

export const selectedAssessmentReducer = (selectedAssessment = null, action) => {
  if (action.type === 'ASSESSMENT_SELECTED') {
    return action.payload;
  }
  return selectedAssessment;
};
