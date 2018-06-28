import * as actionTypes from './actionTypes';

// Synchronous action
export const saveResult = (res) => {
  // Notice we could manipulate this before saving it.
  // const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
}

// Async action: only works because of redux-thunk
// This never goes to the reducer
// Once it finishes, it calls the synchronous action
// Which actually updates the store
export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout( () => {
      //Don't overuse getState(). Pass relevant data as args
      const oldCounter = getState().ctr.counter;
      console.log("result.js", oldCounter)
      dispatch(saveResult(res))
    }, 2000);
  }
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};
