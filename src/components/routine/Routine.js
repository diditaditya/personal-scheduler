import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

import Header from './Header';
import Tabs from './tabs/Tabs';
import TimeTable from './timetable/TimeTable';
import Add from './add/AddRoutine';

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
      addVisible: false,
    };
  }

  selectNew(day) {
    this.setState({
      selected: day,
    });
  }

  setAddVisible(isAddVisible) {
    this.setState({
      addVisible: isAddVisible
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.addVisible}
        >
          <Add
            closeAdd={this.setAddVisible.bind(this)}
            isAddVisible={this.state.addVisible}
          />
        </Modal>
        <Header
          selected={this.state.selected}
          showAdd={this.setAddVisible.bind(this)}
          isAddVisible={this.state.addVisible}
        />
        <Tabs selectNew={this.selectNew.bind(this)} />
        <TimeTable selected={this.state.selected} />
      </View>
    );
  }
}

export default Routine;
