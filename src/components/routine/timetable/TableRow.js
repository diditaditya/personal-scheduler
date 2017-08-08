import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity } from 'react-native';

import { updateRoutine } from '../../../store/routineAction';

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

const TableRow = (props) => {
  let rowData = {
    index: props.index,
    day: props.day,
    start: props.start,
    end: props.end,
    description: props.description,
  };
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
        <TouchableOpacity onPress={() => props.deleteRoutine(rowData)}>
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

export default TableRow;

// class TableRow extends Component {

  // deleteRoutine() {
  //   // console.log(this.props);
  //   // console.log(this.props.schedule);
  //   // console.log(this.props.schedule[this.props.day]);
  //   console.log('index ', this.props.index);
  //   let schedule = this.props.schedule;
  //   let dayRoutines = schedule[this.props.day];
  //
  //   dayRoutines.splice(this.props.index, 1);
  //
  //   dayRoutines.sort((a, b) => {
  //     let aHour = Number(a.start.hour);
  //     let aMinute = Number(a.start.minute) / 60;
  //     let bHour = Number(b.start.hour);
  //     let bMinute = Number(b.start.minute) / 60;
  //     return (aHour + aMinute) - (bHour + bMinute);
  //   });
  //
  //   schedule[this.props.day] = dayRoutines;
  //
  //   this.props.updateRoutine(schedule);
  // }

  // deleteRoutine() {
  //   let rowData = {
  //     index: this.props.index,
  //     day: this.props.day,
  //     start: this.props.start,
  //     end: this.props.end,
  //     description: this.props.description,
  //   };
  //   this.props.deleteRoutine(rowData);
  // }
  //
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.cell}>
  //         <Text style={styles.text}>{this.props.start}</Text>
  //       </View>
  //       <View style={styles.cell}>
  //         <Text style={styles.text}>{this.props.end}</Text>
  //       </View>
  //       <View style={styles.cellDesc}>
  //         <Text style={styles.text}>{this.props.description}</Text>
  //       </View>
  //       <View style={styles.options}>
  //         <TouchableOpacity onPress={() => this.deleteRoutine()}>
  //           <Image
  //             style={styles.button}
  //             source={require('../../../assets/icons/ic_delete_black_24dp_1x.png')}
  //           />
  //         </TouchableOpacity>
  //         <TouchableOpacity>
  //           <Image
  //             style={styles.button}
  //             source={require('../../../assets/icons/ic_mode_edit_black_24dp_1x.png')}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // }
// }

// const mapStateToProps = (state) => {
//   return {
//     schedule: state.schedule
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateRoutine: (data) => dispatch(updateRoutine(data))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
