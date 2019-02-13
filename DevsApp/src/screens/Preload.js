import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

class Preload extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };

      window.globalNavigator = this.props.navigation;
      this.props.checkLogin();
      this.directPages = this.directPages.bind(this);
  }

  directPages() {
    switch(this.props.status) {
      case 1:
        this.props.navigation.dispatch(StackActions.reset({
          index:0,
          actions:[
            NavigationActions.navigate({routeName:'Conversations'})
          ]
        }));
        break;
      case 2:
        this.props.navigation.dispatch(StackActions.reset({
          index:0,
          actions:[
            NavigationActions.navigate({routeName:'Home'})
          ]
        }));
        break;
    }
  }

  componentDidMount() {
    this.directPages();
  }

  componentDidUpdate() {
    this.directPages();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../images/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    //512da8
  },
  logo :{
    width: 100,
    height: 100,
  }
});

const mapStateToProps = (state) => {
  return{
    status:state.auth.status
  };
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);

export default PreloadConnect;