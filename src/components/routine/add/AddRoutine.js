import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity } from 'react-native';

import NavBar from '../../navbar/NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
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
  buttonText: {
    textAlign: 'center',
  },
});

class AddRoutine extends Component {
  closeAdd() {
    this.props.closeAdd(!this.props.isAddVisible)
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title={"Add New Routine"}/>
        <Text>Up and Running!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.closeAdd.bind(this)}
        >
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddRoutine;
