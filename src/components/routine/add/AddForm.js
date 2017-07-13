import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
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

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.rowContainer}>
              <Text style={styles.rowText}>On <Text style={{fontWeight: 'bold'}}>{days[this.state.day].label}</Text></Text>
              <TouchableOpacity onPress={this.showDayPicker.bind(this)}>
                <Text style={styles.rowText}>Change Day</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.rowText}>Starts at <Text style={{fontWeight: 'bold'}}>{`${this.state.start.hour}:${this.state.start.minute}`}</Text></Text>
              <TouchableOpacity onPress={this.showStartTimePicker.bind(this)}>
                <Text style={styles.rowText}>Change Time</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowContainer}>
              <Text style={styles.rowText}>Ends at <Text style={{fontWeight: 'bold'}}>{`${this.state.end.hour}:${this.state.end.minute}`}</Text></Text>
              <TouchableOpacity onPress={this.showEndTimePicker.bind(this)}>
                <Text style={styles.rowText}>Change Time</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({description: text})}
              value={this.state.description}
              editable={true}
              multiline={true}
              // onSubmitEditing={() => Keyboard.dismiss}
            />
          </Text>
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
          />
        </Modal>



      </View>
    )
  }
}

export default Form;
