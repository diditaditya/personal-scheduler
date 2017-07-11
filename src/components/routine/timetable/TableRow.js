import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'lightcyan',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
  },
  cellDesc: {
    flex: 2,
    borderWidth: 1,
    justifyContent: 'center',
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 24,
    height: 24,
    margin: 2,
  },
  text: {
    textAlign: 'center',
  }
});

const TableHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text style={styles.text}>{props.start}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>{props.end}</Text>
      </View>
      <View style={styles.cellDesc}>
        <Text style={styles.text}>{props.description}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Image
            style={styles.button}
            source={require('../../../assets/icons/ic_delete_black_24dp_1x.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.button}
            source={require('../../../assets/icons/ic_mode_edit_black_24dp_1x.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TableHeader;
