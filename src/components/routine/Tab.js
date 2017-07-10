import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 1,
    borderRadius: 2,
  }
});

class Tab extends Component {
  onPressed() {
    this.props.select(this.props.text);
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPressed.bind(this)}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Tab;
