import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView } from 'react-native';

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
    this.state = {
      schedule: {
        Mon: [{
          start: '07:00',
          end: '08:00',
          description: 'Some monday morning activity',
          remark: 'none',
        }, {
          start: '08:00',
          end: '10:00',
          description: 'Some other monday morning activity',
          remark: 'none',
        }, {
          start: '10:00',
          end: '12:00',
          description: 'Some monday before noon activity',
          remark: 'none',
        }],
        Tue: [{
          start: '07:00',
          end: '07:30',
          description: 'Some tuesday morning activity',
          remark: 'none',
        }, {
          start: '07:30',
          end: '11:00',
          description: 'Some other tuesday morning activity',
          remark: 'none',
        }, {
          start: '11:00',
          end: '12:00',
          description: 'Some tuesday before noon activity',
          remark: 'none',
        }],
        Wed: [{
          start: '07:00',
          end: '08:00',
          description: 'Some wednesday morning activity',
          remark: 'none',
        }, {
          start: '08:00',
          end: '10:00',
          description: 'Some other wednesday morning activity',
          remark: 'none',
        }],
        Thu: [{
          start: '07:00',
          end: '08:30',
          description: 'Some thursday morning activity',
          remark: 'none',
        }, {
          start: '08:30',
          end: '10:00',
          description: 'Some other thursday morning activity',
          remark: 'none',
        }, {
          start: '10:00',
          end: '12:00',
          description: 'Some thursday before noon activity',
          remark: 'none',
        }],
        Fri: [{
          start: '07:00',
          end: '08:00',
          description: 'Some friday morning activity',
          remark: 'none',
        }, {
          start: '13:00',
          end: '15:00',
          description: 'Some friday afternoon activity',
          remark: 'none',
        }],
        Sat: [],
        Sun: [],
      },
    };
  }

  render() {
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
  }
}

export default TimeTable;
