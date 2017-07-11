import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'royalblue',
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'powderblue',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

export default NavBar;
