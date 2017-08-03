import {
  INITIALIZE_ROUTINES_SUCCESS,
  SET_NEW_ROUTINE_DAY,
  SET_NEW_ROUTINE_START,
  SET_NEW_ROUTINE_END,
  SET_NEW_ROUTINE_DESCRIPTION } from './constants';

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
            .then((response) => {
              console.log('new schedule has been initialized');
              console.log(response);
            })
            .catch((err) => {
              console.log('error initializing new schedule ', err);
            });
        } else {
          console.log('data is found');
          console.log(schedule);
        }
      })
      .catch((err) => {
        console.log('error retrieving data ', err);
      });
  }
}

export const addNewRoutine = (data) => {
  return dispatch => {
    console.log('in routineAction addNewRoutine function');
  }
}
