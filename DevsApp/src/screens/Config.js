import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import { logout } from '../actions/AuthActions';

class Config extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };

      this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();

    //window.globalNavigator.navigate('Home');
    this.props.navigation.dispatch(StackActions.reset({
      index:0,
      key:null,
      actions:[
        NavigationActions.navigate({routeName:'Home'})
      ]
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Sair"
          onPress={this.logout}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10,
    marginTop: Platform.OS == 'ios'? 20 : 0,
  },
  title:{
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  input:{
    height: 50,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    marginBottom: 5,
    padding: 10,
  },
});

const mapStateToProps = (state) => {
  return{
    name:state.chat.name
  };
};

const ConfigConnect = connect(mapStateToProps, { logout })(Config);

export default ConfigConnect;