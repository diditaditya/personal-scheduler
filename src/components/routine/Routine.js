import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import Tabs from './Tabs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9ef0ee',
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
        <Text style={styles.text}>Routine.js is successfully loaded</Text>
      </View>
    );
  }
}

export default Routine;
