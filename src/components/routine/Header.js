import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

class RoutineHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageMark: 'Routine',
      date: '',
    };
  }

  componentDidMount() {
    let today = new Date();
    this.setState({
      date: `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.pageMark}</Text>
        <Text>{this.state.date}</Text>
      </View>
    );
  }

}

export default RoutineHeader;
