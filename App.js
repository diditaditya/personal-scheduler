import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import NavBar from './src/components/navbar/NavBar';
import Routine from './src/components/routine/Routine';

import store from './src/store/configureStore';

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
  constructor(props) {
    super(props);
    this.state = {
      description: 'Type here',
    }
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavBar style={styles.navBar} title={"Personal Scheduler"}/>
          <Routine style={styles.routine}/>
        </View>
      </Provider>
      // <View style={{paddingTop: 25}}>
      //   <Text>Up and Running</Text>
      // </View>
    );
  }
}
