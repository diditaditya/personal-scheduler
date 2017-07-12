import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from './src/components/navbar/NavBar';
import Routine from './src/components/routine/Routine';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 24,
  },
  navBar: {
  },
  routine: {
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar style={styles.navBar} title={"Personal Scheduler"}/>
        <Routine style={styles.routine}/>
      </View>
    );
  }
}
