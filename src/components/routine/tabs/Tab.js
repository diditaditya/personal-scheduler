import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 1,
    borderRadius: 2,
  }
});

class Tab extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      container: {
        height: 25,
        paddingLeft: 7,
        paddingRight: 7,
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: 'lightskyblue',
        justifyContent: 'center',
      },
      text: {
        color: 'black',
        textAlign: 'center',
      },
    };
  }

  onPressed() {
    this.props.select(this.props.text);
  }

  isSelected() {
    if (this.props.isSelected(this.props.text)) {
      this.styles.container.backgroundColor = 'dodgerblue';
    } else {
      this.styles.container.backgroundColor = 'lightskyblue';
    }
  }

  render() {
    this.isSelected();
    return (
      <TouchableOpacity style={this.styles.container} onPress={this.onPressed.bind(this)}>
        <Text style={this.styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Tab;
