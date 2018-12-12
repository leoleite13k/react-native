import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

class ReceitaItem extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

  render() {
    return (
      <View style={styles.area}>
      	
      </View>
    );
  }
}

const styles = StyleSheet.create({
    area:{
        height: 80,
        borderBottomWidth: 1,
        
    }
});


export default ReceitaItem;