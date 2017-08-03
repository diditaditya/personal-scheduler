import React from 'react';
import { AsyncStorage } from 'react-native';

class Routines {
  constructor() {
    this.state =  {
      schedule: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [],
      },
    };
  }

  async initData() {
    try {
      let storedSchedule = await AsyncStorage.getItem('schedule');
      if (storedSchedule) {
        this.setState({
          schedule: storedSchedule,
        });
        return {status: 'success' , schedule: this.state.schedule};
      }
    } catch (err) {
      console.log('no Personal Scheduler data is found. Empty data is initiated.');
      try {
        await AsyncStorage.setItem('schedule', this.state.schedule);
        try {
          let storedSchedule = await AsyncStorage.getItem('schedule');
          if (storedSchedule) {
            this.setState({
              schedule: storedSchedule,
            });
            return {status: 'success', schedule: this.state.schedule};
          }
        } catch (err) {
          console.log('Error fetching new empty data.');
          return {status: 'failed', error: err};
        }
      } catch (err) {
        console.log('Error initializing new data.');
        console.log('err: ', err);
        return {status: 'failed', error: err};
      }
    }
  }

  getRoutines() {
    return this.state.schedule;
  }

  async addRoutine(data) {
    console.log('in src/data/routine.js addRoutine ');
    if (data.day && data.routine.start && data.routine.end && data.routine.description) {
      let tempSchedule = this.state.schedule;
      tempSchedule[data.day].push(data.routine);
      try {
        await AsyncStorage.setItem('schedule', tempSchedule);
        this.setState({
          schedule: tempSchedule,
        });
        console.log(this.state.schedule);
        return {status: 'success', schedule: this.state.schedule};
      } catch (err) {
        console.log('Error saving new routine');
        console.log('err: ', err);
        return {status: 'failed', error: err};
      }
    } else {
      return {status: 'failed', error: 'day and routine data is required'};
    }
  }

  editRoutine() {

  }

  deleteRoutine() {

  }


}

export var Schedule = {
  Mon: [{
    start: '07:00',
    end: '08:00',
    description: 'Some monday morning activity',
    remark: 'none',
  }, {
    start: '08:00',
    end: '10:00',
    description: 'Some other monday morning activity',
    remark: 'none',
  }, {
    start: '10:00',
    end: '12:00',
    description: 'Some monday before noon activity',
    remark: 'none',
  }],
  Tue: [{
    start: '07:00',
    end: '07:30',
    description: 'Some tuesday morning activity',
    remark: 'none',
  }, {
    start: '07:30',
    end: '11:00',
    description: 'Some other tuesday morning activity',
    remark: 'none',
  }, {
    start: '11:00',
    end: '12:00',
    description: 'Some tuesday before noon activity',
    remark: 'none',
  }],
  Wed: [{
    start: '07:00',
    end: '08:00',
    description: 'Some wednesday morning activity',
    remark: 'none',
  }, {
    start: '08:00',
    end: '10:00',
    description: 'Some other wednesday morning activity',
    remark: 'none',
  }],
  Thu: [{
    start: '07:00',
    end: '08:30',
    description: 'Some thursday morning activity',
    remark: 'none',
  }, {
    start: '08:30',
    end: '10:00',
    description: 'Some other thursday morning activity',
    remark: 'none',
  }, {
    start: '10:00',
    end: '12:00',
    description: 'Some thursday before noon activity',
    remark: 'none',
  }],
  Fri: [{
    start: '07:00',
    end: '08:00',
    description: 'Some friday morning activity',
    remark: 'none',
  }, {
    start: '13:00',
    end: '15:00',
    description: 'Some friday afternoon activity',
    remark: 'none',
  }],
  Sat: [],
  Sun: [],
};

export default Routines;
