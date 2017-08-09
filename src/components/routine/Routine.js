import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Modal, Alert, Button } from 'react-native';

import Header from './Header';
import Tabs from './tabs/Tabs';
import TimeTable from './timetable/TimeTable';
import Add from './add/AddRoutine';
import Edit from './edit/EditRoutine';

import { initRoutinesFromStorage, updateRoutine } from '../../store/routineAction';

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

class Routine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Mon',
      addVisible: false,
      deleteVisible: false,
      editVisible: false,
      whatever: true,
      schedule: {},
      toBeEdited: {}
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

  setEditVisible(isEditVisible) {
    this.setState({
      editVisible: isEditVisible,
    });
  }

  componentDidMount() {
    this.props.initRoutinesFromStorage();
  }

  deleteRoutine(schedule, day, index) {
    let dayRoutines = schedule[day];

    dayRoutines.splice(index, 1);

    dayRoutines.sort((a, b) => {
      let aHour = Number(a.start.hour);
      let aMinute = Number(a.start.minute) / 60;
      let bHour = Number(b.start.hour);
      let bMinute = Number(b.start.minute) / 60;
      return (aHour + aMinute) - (bHour + bMinute);
    });

    schedule[day] = dayRoutines;

    this.props.updateRoutine(schedule);

    this.setState({
      whatever: !this.state.whatever
    });
  }

  deleteAlert(rowData) {
    let self = this;
    Alert.alert(
      'Delete Routine',
      `Do you want to permanently delete ${rowData.description} from ${rowData.start} to ${rowData.end}?`,
      [
        {text: 'Cancel', onPress: () => {}},
        {text: 'OK', onPress: () => {
          this.deleteRoutine(self.props.schedule, rowData.day, rowData.index)
        }}
      ],
      {cancelable: false}
    )
  }

  openEdit(rowData) {
    this.setState({
      editVisible: !this.state.editVisible,
      toBeEdited: rowData
    });
  }

  editRoutine(updatedRoutine) {
    console.log('edit edit edit');
    let dayRoutines = schedule[day];

    dayRoutines.splice(index, 1, updatedRoutine);

    dayRoutines.sort((a, b) => {
      let aHour = Number(a.start.hour);
      let aMinute = Number(a.start.minute) / 60;
      let bHour = Number(b.start.hour);
      let bMinute = Number(b.start.minute) / 60;
      return (aHour + aMinute) - (bHour + bMinute);
    });

    schedule[day] = dayRoutines;

    this.props.updateRoutine(schedule);

    this.setState({
      whatever: !this.state.whatever
    });
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

        <Modal
          animationType={'slide'}
          onRequestClose={()=>{}}
          transparent={false}
          visible={this.state.editVisible}
          supportedOrientations={['portrait', 'landscape']}
          style={styles.modal}
        >
          <Edit
            closeEdit={this.setEditVisible.bind(this)}
            isEditVisible={this.state.editVisible}
            rowData={this.state.toBeEdited}
            // editRoutine={this.editRoutine}
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
          deleteRoutine={this.deleteAlert.bind(this)}
          openEdit={this.openEdit.bind(this)}
          // editRoutine={this.editRoutine.bind(this)}
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
    initRoutinesFromStorage: () => dispatch(initRoutinesFromStorage()),
    updateRoutine: (data) => dispatch(updateRoutine(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routine);
