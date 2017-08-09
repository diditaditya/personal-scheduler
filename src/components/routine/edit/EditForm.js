import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  TouchableOpacity } from 'react-native';

import DayPicker from './DayPicker.js';
import TimePicker from './TimePicker';

import {
  setNewRoutineDay,
  setNewRoutineStart,
  setNewRoutineEnd,
  setNewRoutineDescription } from '../../../store/routineAction';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 25,
  },
  modal: {
    flex: 0.5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'dodgerblue',
    paddingTop: 5,
    paddingBottom: 5,
    // backgroundColor: 'yellow',
  },
  rowText: {
    padding: 5,
  },
  textInput: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    height: 50,
    width: Dimensions.get('window').width,
    // backgroundColor: 'green',
  },
  icon: {
    width: 20,
    height: 20,
    margin: 5,
  }
});

const days = [
  {label: 'Sunday', value: 'Sun'},
  {label: 'Monday', value: 'Mon'},
  {label: 'Tuesday', value: 'Tue'},
  {label: 'Wednesday', value: 'Wed'},
  {label: 'Thursday', value: 'Thu'},
  {label: 'Friday', value: 'Fri'},
  {label: 'Saturday', value: 'Sat'},
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      start: {
        hour: '00',
        minute: '00',
      },
      end: {
        hour: '00',
        minute: '00',
      },
      description: 'Some activity',
      dayPickerVisible: false,
      startTimePickerVisible: false,
      endTimePickerVisible: false,
    };
  }

  showDayPicker() {
    this.setState({
      dayPickerVisible: true,
    });
  }

  closeDayPicker() {
    this.setState({
      dayPickerVisible: false,
    });
  }

  showStartTimePicker() {
    this.setState({
      startTimePickerVisible: true,
    });
  }

  closeStartTimePicker() {
    this.setState({
      startTimePickerVisible: false,
    });
  }

  showEndTimePicker() {
    this.setState({
      endTimePickerVisible: true,
    });
  }

  closeEndTimePicker() {
    this.setState({
      endTimePickerVisible: false,
    });
  }

  setDay(day) {
    this.setState({
      day: day,
    });
    this.props.setNewRoutineDay(day);
  }

  setStart(hour, minute) {
    this.setState({
      start: {
        hour: hour,
        minute: minute,
      },
    });
    let start = {
      hour: hour,
      minute: minute
    };
    this.props.setNewRoutineStart(start);
  }

  setEnd(hour, minute) {
    let newHour = hour;
    let newMinute = minute;
    this.setState({
      end: {
        hour: newHour,
        minute: newMinute,
      },
    });
    let end = {
      hour: hour,
      minute: minute
    };
    this.props.setNewRoutineEnd(end);
  }

  setDescription(text) {
    this.setState({
      description: text
    });
    this.props.setNewRoutineDescription(text);
  }

  // componentWillReceivedProps(nextProps) {
  //   console.log('in componentWillReceivedProps');
  //   if (nextProps.rowData) {
  //     console.log('rowData is found');
  //     let dayIndex = 0;
  //     days.map((day, index) => {
  //       if (day.value === nextProps.rowData.day) {
  //         dayIndex = index;
  //       }
  //     });
  //     if (dayIndex !== this.state.day) {
  //       console.log('day is different');
  //       this.setDay(dayIndex);
  //     }
  //
  //     let start = nextProps.rowData.start.split(":");
  //     console.log(start);
  //     console.log(this.state.start.hour);
  //     if (start[0] !== this.state.start.hour || start[1] !== this.state.start.minute) {
  //       console.log('start time is different');
  //       this.setStart(start[0], start[1]);
  //     }
  //
  //     let end = nextProps.rowData.end.split(":");
  //     if (end[0] !== this.state.end.hour || end[1] !== this.state.end.minute) {
  //       console.log('end time is different');
  //       this.setStart(end[0], end[1]);
  //     }
  //
  //     if (nextProps.rowData.description !== this.state.description) {
  //       console.log('description is different');
  //       this.setDescription(nextProps.rowData.description);
  //     }
  //
  //   }
  // }

  componentDidMount() {
    let dayIndex = 0;
    days.map((day, index) => {
      if (day.value === this.props.rowData.day) {
        dayIndex = index;
      }
    });
    let start = this.props.rowData.start.split(":");
    let end = this.props.rowData.end.split(":");
    this.setDay(dayIndex);
    this.setStart(start[0], start[1]);
    this.setEnd(end[0], end[1]);
    this.setDescription(this.props.rowData.description);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.rowContainer}>
              <Text style={styles.rowText}>
                On <Text style={{fontWeight: 'bold'}}>
                  {days[this.state.day].label}
                </Text>
              </Text>
              <TouchableOpacity onPress={this.showDayPicker.bind(this)}>
                <Text style={styles.rowText}>Change Day</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <Text style={styles.rowText}>
                Starts at <Text style={{fontWeight: 'bold'}}>
                  {`${this.state.start.hour}:${this.state.start.minute}`}
                </Text>
              </Text>
              <TouchableOpacity onPress={this.showStartTimePicker.bind(this)}>
                <Text style={styles.rowText}>Change Time</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <Text style={styles.rowText}>
                Ends at <Text style={{fontWeight: 'bold'}}>
                  {`${this.state.end.hour}:${this.state.end.minute}`}
                </Text>
              </Text>
              <TouchableOpacity onPress={this.showEndTimePicker.bind(this)}>
                <Text style={styles.rowText}>Change Time</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.rowContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setDescription(text)}
            value={this.state.description}
            editable={true}
            multiline={true}
            // onSubmitEditing={() => Keyboard.dismiss}
          />
        </View>

        <Modal
          animationType={'slide'}
          onRequestClose={()=>{}}
          transparent={true}
          visible={this.state.dayPickerVisible}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modal}
        >
          <DayPicker
            items={days}
            setValue={this.setDay.bind(this)}
            closePicker={this.closeDayPicker.bind(this)}
            day={this.state.day}
          />
        </Modal>

        <Modal
          animationType={'slide'}
          onRequestClose={()=>{}}
          transparent={true}
          visible={this.state.startTimePickerVisible}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modal}
        >
          <TimePicker
            setValue={this.setStart.bind(this)}
            closePicker={this.closeStartTimePicker.bind(this)}
            hour={this.state.start.hour}
            minute={this.state.start.minute}
          />
        </Modal>

        <Modal
          animationType={'slide'}
          onRequestClose={()=>{}}
          transparent={true}
          visible={this.state.endTimePickerVisible}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modal}
        >
          <TimePicker
            setValue={this.setEnd.bind(this)}
            closePicker={this.closeEndTimePicker.bind(this)}
            hour={this.state.end.hour}
            minute={this.state.end.minute}
          />
        </Modal>

      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNewRoutineDay: (data) => dispatch(setNewRoutineDay(data)),
    setNewRoutineStart: (data) => dispatch(setNewRoutineStart(data)),
    setNewRoutineEnd: (data) => dispatch(setNewRoutineEnd(data)),
    setNewRoutineDescription: (data) => dispatch(setNewRoutineDescription(data)),
  }
}

export default connect(null, mapDispatchToProps)(Form);
