import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView } from 'react-native';

import Header from './TableHeader';
import Row from './TableRow';
import { Schedule } from '../../../data/routines';

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
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      schedule: Schedule,
    });
  }

  render() {
    if (this.state.schedule) {
      return (
        <View style={styles.container}>
          <View style={styles.shoulder}></View>
          <View style={styles.main}>
            <Header style={styles.header} />
            <View>
              {this.state.schedule[this.props.selected].map((activity, idx) => {
                return (
                  <Row
                    style={styles.row}
                    key={idx}
                    start={activity.start}
                    end={activity.end}
                    description={activity.description}
                    remark={activity.remark}
                  />
                )
              })}
            </View>
          </View>
          <View style={styles.shoulder}></View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.shoulder}></View>
          <View style={styles.main}>
            <ActivityIndicator size={'large'} />
            <Text>Loading data..</Text>
          </View>
          <View style={styles.shoulder}></View>
        </View>
      )
    }

  }
}

export default TimeTable;
