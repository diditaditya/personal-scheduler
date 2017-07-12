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
    flexDirection: 'column',
  },
  form: {
    flexDirection: 'row',
  },
  shoulder: {
    flex: 1,
  },
  main: {
    flex: 14,
  },
  textCenter: {
    textAlign: 'center',
  },
  modal: {
    flex: 0.5,
  }
});

const days = [
  {label: 'Sunday', value: 'Sun'},
  {label: 'Monday', value: 'Mon'},
  {label: 'Tueday', value: 'Tue'},
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
      end: '',
      description: '',
      dayPickerVisible: false,
      startTimePickerVisible: false,
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

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.showDayPicker.bind(this)}>
          <Text style={styles.textCenter}>Select Day</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showStartTimePicker.bind(this)}>
          <Text style={styles.textCenter}>Select Start Time</Text>
        </TouchableOpacity>

        <View style={styles.form}>
          <View style={styles.shoulder}></View>
          <View style={styles.main}>
            <Text>{days[this.state.day].label}</Text>
            <Text>{`${this.state.start.hour}:${this.state.start.minute}`}</Text>
          </View>
          <View style={styles.shoulder}></View>
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
            isAddVisible={this.state.addVisible}
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
            // items={days}
            setValue={this.setStart.bind(this)}
            closePicker={this.closeStartTimePicker.bind(this)}
            isAddVisible={this.state.addVisible}
          />
        </Modal>



      </View>
    )
  }
}

export default Form;
