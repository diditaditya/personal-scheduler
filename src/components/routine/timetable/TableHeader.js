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
  },
  header: {
    width: 65,
    // paddingLeft: 5,
    // paddingRight: 5,
    borderWidth: 1,
  },
  headerDesc: {
    width: 150,
    // paddingLeft: 5,
    // paddingRight: 5,
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
  }
});

const TableHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Start</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>End</Text>
      </View>
      <View style={styles.headerDesc}>
        <Text style={styles.text}>Description</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>Remark</Text>
      </View>
    </View>
  );
}

export default TableHeader;
