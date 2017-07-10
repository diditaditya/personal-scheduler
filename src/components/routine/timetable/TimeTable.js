import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight } from 'react-native';

import Header from './TableHeader';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  }
});

class TimeTable extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

export default TimeTable;
