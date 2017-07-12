import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity } from 'react-native';

import DayPicker from './DayPicker';
import TimePicker from './TimePicker';

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
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'dodgerblue',
    paddingTop: 5,
    paddingBottom: 5,
  },
  rowText: {
    padding: 5,
  },
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
      description: '',
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
  }

  setStart(hour, minute) {
    this.setState({
      start: {
        hour: hour,
        minute: minute,
      },
    });
  }

  setEnd(hour, minute) {
    this.setState({
      end: {
        hour: hour,
        minute: minute,
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>On {days[this.state.day].label}</Text>
          <TouchableOpacity onPress={this.showDayPicker.bind(this)}>
            <Text style={styles.rowText}>Change Day</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Starts at {`${this.state.start.hour}:${this.state.start.minute}`}</Text>
          <TouchableOpacity onPress={this.showStartTimePicker.bind(this)}>
            <Text style={styles.rowText}>Change Time</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Ends at {`${this.state.end.hour}:${this.state.end.minute}`}</Text>
          <TouchableOpacity onPress={this.showEndTimePicker.bind(this)}>
            <Text style={styles.rowText}>Change Time</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.dayPickerVisible}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modal}
        >
          <DayPicker
            items={days}
            setValue={this.setDay.bind(this)}
            closePicker={this.closeDayPicker.bind(this)}
            // isAddVisible={this.state.addVisible}
          />
        </Modal>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.startTimePickerVisible}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modal}
        >
          <TimePicker
            setValue={this.setStart.bind(this)}
            closePicker={this.closeStartTimePicker.bind(this)}
            // isAddVisible={this.state.addVisible}
          />
        </Modal>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.endTimePickerVisible}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modal}
        >
          <TimePicker
            setValue={this.setEnd.bind(this)}
            closePicker={this.closeEndTimePicker.bind(this)}
            // isAddVisible={this.state.addVisible}
          />
        </Modal>



      </View>
    )
  }
}

export default Form;
