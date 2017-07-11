import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  today: {
    textAlign: 'center',
  }
});

class RoutineHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageMark: 'Routine',
      date: '',
      day: '',
    };
  }

  showAdd() {
    this.props.showAdd(!this.props.isAddVisible);
  }

  componentDidMount() {
    let today = new Date();
    let months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'];
    this.setState({
      date: `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`,
      day: days[today.getDay()],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.pageMark}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.showAdd.bind(this)}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.today}>{this.state.day}</Text>
          <Text style={styles.today}>{this.state.date}</Text>
        </View>
      </View>
    );
  }

}

export default RoutineHeader;
