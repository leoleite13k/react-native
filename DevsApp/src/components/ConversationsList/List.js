import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class List extends Component {
constructor(props) {
    super(props);

    this.state = {

    };

    this.openItem = this.openItem.bind(this);
}

  openItem() {
    this.props.onPress(this.props.data);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.openItem}
        style={styles.button}
        underlayColor='#DDDDDD'>
        <Text style={styles.name}>
          {this.props.data.nameChat}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    flex: 1,
    justifyContent: 'center',
    height: 50,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    borderStyle: 'solid',
    padding: 10,
  },
  name:{
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default List;