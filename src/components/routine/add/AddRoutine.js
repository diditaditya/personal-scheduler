import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity } from 'react-native';

import NavBar from '../../navbar/NavBar';
import Form from './AddForm';
// import StoredRoutines from '../../../data/routines';

import { addNewRoutine } from '../../../store/routineAction';
import { DAYS_ARRAY } from '../../../store/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 3,
    width: 75,
    margin: 5,
    padding: 5,
    backgroundColor: 'lightsteelblue',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
});

// const scheduleControl = new StoredRoutines();

class AddRoutine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  addRoutine() {
    let startHour = Number(this.props.newRoutine.routine.start.hour);
    let startMinute = Number(this.props.newRoutine.routine.start.minute) / 60;
    let endHour = Number(this.props.newRoutine.routine.end.hour);
    let endMinute = Number(this.props.newRoutine.routine.end.minute) / 60;

    if ((startHour + startMinute) >= (endHour + endMinute)) {
      console.log('Start time must be earlier than end time');
      this.setState({
        message: 'Start time must be earlier than end time'
      });
    } else {
      if (this.props.newRoutine.routine.description.length === 0) {
        console.log('Description must not be empty');
        this.setState({
          message: 'Description must not be empty'
        });
      } else {
        let schedule = this.props.schedule;
        schedule[DAYS_ARRAY[this.props.newRoutine.day]].push(this.props.newRoutine.routine);
        this.props.addNewRoutine(schedule);

        this.props.closeAdd(!this.props.isAddVisible);
      }
    }
  }

  closeAdd() {
    this.props.closeAdd(!this.props.isAddVisible);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <NavBar title={"Add New Routine"}/>
          <Form />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addRoutine()}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.closeAdd.bind(this)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    schedule: state.schedule,
    newRoutine: state.newRoutine
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewRoutine: (data) => dispatch(addNewRoutine(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRoutine);
