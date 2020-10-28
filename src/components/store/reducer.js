import { combineReducers } from 'redux'
import { SET_MARKERS } from './types';

const initialState = {
  markers: [],
};

const markers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARKERS:
      return {
        markers: action.data,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  markers,
});

export default rootReducer;
