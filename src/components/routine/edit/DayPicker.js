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

  componentDidMount() {
    this.setState({
      value: this.props.day
    });
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
          <Picker
            selectedValue={this.state.value}
            onValueChange={(itemValue, itemIndex) => {this.onValueChange(itemIndex)}}
          >
            {this.props.items.map((item, index) => {
              return <Picker.Item key={index} label={item.label} value={index} />
            })}
          </Picker>

        </View>
      </View>
    )
  }
}

export default PickerModal;
