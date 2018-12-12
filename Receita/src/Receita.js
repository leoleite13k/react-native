import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';

class Lista extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Lista;