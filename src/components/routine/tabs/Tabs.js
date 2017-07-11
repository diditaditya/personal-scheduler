import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight } from 'react-native';

import Tab from './Tab';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
  },
});

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      selected: 'Mon',
    }
  }

  onPress(day) {
    this.setState({
      selected: day,
    });
    this.props.selectNew(day);
  }

  isSelected(day) {
    if (day === this.state.selected) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.days.map((day, idx) => {
          return (
            <Tab key={idx} text={day} select={this.onPress.bind(this)} isSelected={this.isSelected.bind(this)}/>
          )
        })}
      </View>
    );
  }
}

export default Tabs;
