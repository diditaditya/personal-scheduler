import {
  INITIALIZE_ROUTINES_SUCCESS,
  SET_NEW_ROUTINE_DAY,
  SET_NEW_ROUTINE_START,
  SET_NEW_ROUTINE_END,
  SET_NEW_ROUTINE_DESCRIPTION } from './constants';

const initialState = {
  schedule: {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  },
  newRoutine: {
    day: '',
    routine: {
      start: '',
      end: '',
      description: '',
      remark: '',
    }
  }
}

const routineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_ROUTINE_DAY:
      return {
        ...state,
        newRoutine: {...state.newRoutine, day: action.payload}
      }
    case SET_NEW_ROUTINE_START:
      return {
        ...state,
        newRoutine: {
          ...state.newRoutine,
          routine: {
            ...state.newRoutine.routine,
            start: action.payload
          }
        }
      }
    case SET_NEW_ROUTINE_END:
      return {
        ...state,
        newRoutine: {
          ...state.newRoutine,
          routine: {
            ...state.newRoutine.routine,
            end: action.payload
          }
        }
      }
    case SET_NEW_ROUTINE_DESCRIPTION:
      return {
        ...state,
        newRoutine: {
          ...state.newRoutine,
          routine: {
            ...state.newRoutine.routine,
            description: action.payload
          }
        }
      }
    default:
      return state;
  }
}

export default routineReducer;