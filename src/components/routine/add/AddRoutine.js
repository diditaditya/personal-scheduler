import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity } from 'react-native';

import NavBar from '../../navbar/NavBar';
import Form from './AddForm';
import StoredRoutines from '../../../data/routines';

import { addNewRoutine } from '../../../store/routineAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 3,
    width: 75,
    margin: 5,
    padding: 5,
    backgroundColor: 'lightsteelblue',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
});

const scheduleControl = new StoredRoutines();

class AddRoutine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addRoutine() {
    // scheduleControl.addRoutine(data);
    // let data = {
    //   day: 'Mon',
    //   routine: {
    //     start: '07:00',
    //     end: '08:00',
    //     description: 'Some monday morning activity',
    //     remark: 'none',
    //   }
    // };
    this.props.addNewRoutine(this.props.newRoutine);
  }

  closeAdd() {
    this.props.closeAdd(!this.props.isAddVisible)
  }

  componentDidMount() {
    this.setState({
      schedule: scheduleControl.getRoutines(),
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <NavBar title={"Add New Routine"}/>
          <Form />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.addRoutine()}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.closeAdd.bind(this)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    newRoutine: state.newRoutine
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewRoutine: (data) => dispatch(addNewRoutine(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRoutine);
