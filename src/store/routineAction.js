import {
  INITIALIZE_ROUTINES_SUCCESS,
  SET_NEW_ROUTINE_DAY,
  SET_NEW_ROUTINE_START,
  SET_NEW_ROUTINE_END,
  SET_NEW_ROUTINE_DESCRIPTION,
  ADD_NEW_ROUTINE_SUCCESS } from './constants';

import { AsyncStorage } from 'react-native';

const initRoutines = (data) => {
  return {
    type: INITIALIZE_ROUTINES_SUCCESS,
    payload: data
  }
}

export const setNewRoutineDay = (data) => {
  return {
    type: SET_NEW_ROUTINE_DAY,
    payload: data
  }
}

export const setNewRoutineStart = (data) => {
  return {
    type: SET_NEW_ROUTINE_START,
    payload: data
  }
}

export const setNewRoutineEnd = (data) => {
  return {
    type: SET_NEW_ROUTINE_END,
    payload: data
  }
}

export const setNewRoutineDescription = (data) => {
  return {
    type: SET_NEW_ROUTINE_DESCRIPTION,
    payload: data
  }
}

export const addNewRoutineSuccess = (data) => {
  return {
    type: ADD_NEW_ROUTINE_SUCCESS,
    payload: data
  }
}

export const initRoutinesFromStorage = () => {
  return dispatch => {
    AsyncStorage.getItem('schedule')
      .then((schedule) => {
        if (schedule === null) {
          console.log('no data is found');
          console.log('initialize new empty schedule');
          let newSchedule =  {
            Mon: [],
            Tue: [],
            Wed: [],
            Thu: [],
            Fri: [],
            Sat: [],
            Sun: [],
          };
          AsyncStorage.setItem('schedule', JSON.stringify(newSchedule))
            .then(() => {
              console.log('new schedule has been initialized');
              dispatch(initRoutines(newSchedule));
            })
            .catch((err) => {
              console.log('error initializing new schedule ', err);
            });
        } else {
          console.log('data is found');
          let storedSchedule = JSON.parse(schedule);
          dispatch(initRoutines(storedSchedule));
        }
      })
      .catch((err) => {
        console.log('error retrieving data');
        console.log(err);
      });
  }
}

export const addNewRoutine = (data) => {
  return dispatch => {
    console.log('in routineAction addNewRoutine function');
    console.log(data);
    AsyncStorage.setItem('schedule', JSON.stringify(data))
      .then(() => {
        console.log('new routine has been successfully added to the schedule');
        dispatch(addNewRoutineSuccess(data));
      })
      .catch((err) => {
        console.log('error saving new routine to storage');
        console.log(err);
      });
  }
}
