import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: [],
}

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultElId);
  return updateObject(state, {results: updatedArray})
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
        // Notice, we are manipulating state before sending it to the action creator
        // We could manipulate it in the action creator, but here is better
        // you can use concat with arrays to push results immutabley.
        // It creates a clone and adds your result. This keeps state predictable.
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);

  }
  return state;
};

export default reducer;
