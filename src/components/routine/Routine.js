import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Modal } from 'react-native';

import Header from './Header';
import Tabs from './tabs/Tabs';
import TimeTable from './timetable/TimeTable';
import Add from './add/AddRoutine';
import StoredRoutines from '../../data/routines';

import { initRoutinesFromStorage } from '../../store/routineAction';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  modal: {
    flex: 1,
  }
});

const Data = new StoredRoutines();

class Routine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Mon',
      addVisible: false,
      schedule: {},
    };
  }

  selectNew(day) {
    this.setState({
      selected: day,
    });
  }

  setAddVisible(isAddVisible) {
    this.setState({
      addVisible: isAddVisible,
    });
  }

  componentDidMount() {
    this.props.initRoutinesFromStorage();
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          onRequestClose={()=>{}}
          transparent={false}
          visible={this.state.addVisible}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modal}
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
        <TimeTable
          selected={this.state.selected}
          schedule={this.props.schedule[this.state.selected]}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    schedule: state.schedule,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initRoutinesFromStorage: () => dispatch(initRoutinesFromStorage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routine);
