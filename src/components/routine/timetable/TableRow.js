import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
  header: {
    flex: 1,
    borderWidth: 1,
  },
  headerDesc: {
    flex: 2,
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
  }
});

const TableHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{props.start}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>{props.end}</Text>
      </View>
      <View style={styles.headerDesc}>
        <Text style={styles.text}>{props.description}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>{props.remark}</Text>
      </View>
    </View>
  );
}

export default TableHeader;
