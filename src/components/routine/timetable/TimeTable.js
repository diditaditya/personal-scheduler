import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
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

const TimeTable = (props) => {
  // console.log(props.schedule);
  if (props.schedule) {
    return (
      <View style={styles.container}>
        <View style={styles.shoulder}></View>
        <View style={styles.main}>
          <Header style={styles.header} />
          <View>
            {props.schedule.map((activity, idx) => {
              return (
                <Row
                  style={styles.row}
                  key={idx}
                  index={idx}
                  day={props.selected}
                  start={`${activity.start.hour}:${activity.start.minute}`}
                  end={`${activity.end.hour}:${activity.end.minute}`}
                  description={activity.description}
                  remark={activity.remark}
                  deleteRoutine={props.deleteRoutine}
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

export default TimeTable;
