import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight } from 'react-native';

import Header from './TableHeader';
import Row from './TableRow';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // flex: 1,
    flexDirection: 'row',
  },
  shoulder: {
    flex: 1,
  },
  main: {
    flex: 14,
    backgroundColor: 'deepskyblue',
    flexDirection: 'column',
  },
  header: {
    height: 20,
  },
  row: {
    height: 20,
    backgroundColor: 'yellow',
    borderWidth: 1,
  }
});

class TimeTable extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shoulder}></View>
        <View style={styles.main}>
          <Header style={styles.header} />
          <Row style={styles.row} />
        </View>
        <View style={styles.shoulder}></View>
      </View>
    )
  }
}

export default TimeTable;
