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

import DayPicker from './DayPicker';
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
    this.props.setNewRoutineStart(this.state.start);
  }

  setEnd(hour, minute) {
    this.setState({
      end: {
        hour: hour,
        minute: minute,
      },
    });
    this.props.setNewRoutineEnd(this.state.end);
  }

  setDescription(text) {
    // console.log(event);
    this.setState({
      description: text
    });
    this.props.setNewRoutineDescription(text);
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
          {/* <Text style={styles.rowText}>

          </Text> */}
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
