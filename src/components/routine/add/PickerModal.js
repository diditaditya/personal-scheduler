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
  textCenter: {
    textAlign: 'center',
  },
  empty: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 2,
    height: 25,
    width: 40,
    backgroundColor: 'lightsteelblue',
    justifyContent: 'center',
  },
});

class PickerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  closePicker() {

    this.props.closePicker();
  }

  onValueChange(value) {
    this.setState({
      value: value,
    });
    this.props.setValue(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.empty}></View>
        <View style={styles.main}>
          <Picker
            selectedValue={this.state.value}
            onValueChange={(itemValue, itemIndex) => {this.onValueChange(itemIndex)}}
          >
            {this.props.items.map((item, index) => {
              return <Picker.Item key={index} label={item.label} value={index} />
            })}
          </Picker>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.closePicker.bind(this)}>
              <Text style={styles.textCenter}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default PickerModal;
