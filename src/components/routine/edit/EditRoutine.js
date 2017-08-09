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
import Form from './EditForm';

import { updateRoutine } from '../../../store/routineAction';
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

const initialNewRoutine = {
  day: 0,
  routine: {
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
      minute: '00',
    },
    description: 'Some activity',
    remark: '',
  }
}

class EditRoutine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  editRoutine() {
    let startHour = Number(this.props.newRoutine.routine.start.hour);
    let startMinute = Number(this.props.newRoutine.routine.start.minute) / 60;
    let endHour = Number(this.props.newRoutine.routine.end.hour);
    let endMinute = Number(this.props.newRoutine.routine.end.minute) / 60;

    if ((startHour + startMinute) >= (endHour + endMinute)) {
      // console.log('Start time must be earlier than end time');
      this.setState({
        message: 'Start time must be earlier than end time'
      });
    } else {
      if (this.props.newRoutine.routine.description.length === 0) {
        // console.log('Description must not be empty');
        this.setState({
          message: 'Description must not be empty'
        });
      } else {

        this.setState({
          message: ''
        });

        let schedule = this.props.schedule;
        let dayRoutines = schedule[DAYS_ARRAY[this.props.newRoutine.day]];

        dayRoutines.splice(this.props.rowData.index, 1, this.props.newRoutine.routine);

        dayRoutines.sort((a, b) => {
          let aHour = Number(a.start.hour);
          let aMinute = Number(a.start.minute) / 60;
          let bHour = Number(b.start.hour);
          let bMinute = Number(b.start.minute) / 60;
          return (aHour + aMinute) - (bHour + bMinute);
        });

        schedule[DAYS_ARRAY[this.props.newRoutine.day]] = dayRoutines;

        this.props.updateRoutine(schedule);

        this.props.closeEdit(!this.props.isEditVisible);
      }
    }
  }

  closeEdit() {
    this.setState({
      message: ''
    });
    this.props.closeEdit(!this.props.isEditVisible);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <NavBar title={"Edit Routine"}/>
          <Form rowData={this.props.rowData}/>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.editRoutine()}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.closeEdit.bind(this)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textCenter}>{this.state.message}</Text>
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
    updateRoutine: (data) => dispatch(updateRoutine(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRoutine);
