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
    textAlign: 'center',
  }
});

class Routine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Mon',
    };
  }

  selectNew(day) {
    this.setState({
      selected: day,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header selected={this.state.selected} />
        <Tabs selectNew={this.selectNew.bind(this)} />
        <TimeTable selected={this.state.selected} />
      </View>
    );
  }
}

export default Routine;
