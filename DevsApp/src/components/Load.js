import React, { Component } from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

class Load extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Modal animationType="none" transparent visible={this.props.visible}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#512da8" />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#000000',
    opacity: 0.5,
    position: 'absolute'
  }
});


export default Load;