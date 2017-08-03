import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  main: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'dodgerblue',
    borderTopWidth: 1,
    borderTopColor: 'dodgerblue',
    padding: 5,
    backgroundColor: 'lightskyblue',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'right',
    fontSize: 18,
    padding: 5,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 18,
  },
});

var hours = [];

for (let i = 0; i < 24; i++) {
  let hour = String(i);
  if (hour.length < 2) {
    hour = '0' + hour;
    hours.push(hour);
  } else {
    hours.push(hour);
  }
}
var minutes = [];
for (let i = 0; i < 60; i++) {
  let minute = String(i);
  if (minute.length < 2) {
    minute = '0' + minute;
    minutes.push(minute);
  } else {
    minutes.push(minute);
  }
}

class PickerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '00',
      value2: '00',
    };
  }

  closePicker() {
    this.props.setValue(this.state.value1, this.state.value2);
    this.props.closePicker();
  }

  onValueChange1(value) {
    this.setState({
      value1: value,
    });
    this.props.setValue(value, this.state.value2);
  }

  onValueChange2(value) {
    this.setState({
      value2: value,
    });
    this.props.setValue(this.state.value1, value);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.empty}></View>
        <View style={styles.main}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.closePicker.bind(this)}>
              <Text style={styles.buttonText}>Choose</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Hour</Text>
            <Text style={styles.label}>Minutes</Text>
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.value1}
              onValueChange={(itemValue, itemIndex) => {this.onValueChange1(itemValue)}}
            >
              {hours.map((hour, index) => {
                return <Picker.Item key={hour} label={hour} value={hour} />
              })}
            </Picker>
            <Picker
              style={styles.picker}
              selectedValue={this.state.value2}
              onValueChange={(itemValue, itemIndex) => {this.onValueChange2(itemValue)}}
            >
              {minutes.map((minute, index) => {
                return <Picker.Item key={minute} label={minute} value={minute} />
              })}
            </Picker>
          </View>
        </View>
      </View>
    )
  }
}

export default PickerModal;
