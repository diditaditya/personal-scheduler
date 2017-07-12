import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity } from 'react-native';

import PickerModal from './PickerModal';

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
      start: '',
      end: '',
      description: '',
      dayPickerVisible: false,
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

  setDay(day) {
    this.setState({
      day: day,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showDayPicker.bind(this)}>
          <Text style={styles.textCenter}>Select Day</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <View style={styles.shoulder}></View>
          <View style={styles.main}>
            <Text>{days[this.state.day].label}</Text>
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
          <PickerModal
            items={days}
            setValue={this.setDay.bind(this)}
            closePicker={this.closeDayPicker.bind(this)}
            isAddVisible={this.state.addVisible}
          />
        </Modal>
      </View>
    )
  }
}

export default Form;
