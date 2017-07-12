import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity } from 'react-native';

import NavBar from '../../navbar/NavBar';
import Form from './AddForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  button: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 5,
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
        <Form />
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
