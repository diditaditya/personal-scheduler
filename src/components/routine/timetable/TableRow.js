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

const TableHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Start of aasd qwee zc</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>End of qwe zcxcb werw</Text>
      </View>
      <View style={styles.headerDesc}>
        <Text style={styles.text}>Description of mnbmbmnb kkhkjh oiuoiu qwewqead kajhdkahs dds</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>Remark</Text>
      </View>
    </View>
  );
}

export default TableHeader;
