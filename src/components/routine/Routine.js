import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import Tabs from './Tabs';
import TimeTable from './timetable/TimeTable';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    flex: 1,
  },
  text: {
    // flex: 1,
    textAlign: 'center',
  }
});

class Routine extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Tabs />
        <TimeTable />
      </View>
    );
  }
}

export default Routine;
