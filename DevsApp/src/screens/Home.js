import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

class Home extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };

      this.signinButton = this.signinButton.bind(this);
      this.signupButton = this.signupButton.bind(this);
  }

  signinButton() {
    this.props.navigation.navigate('SignIn');
  }

  signupButton() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          DevsApp
        </Text>
        <View style={styles.button}>
          <Button
            onPress={this.signinButton}
            title="Login"
          />
          <Button
            onPress={this.signupButton}
            title="Cadastrar"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  }
});

const mapStateToProps = (state) => {
  return{
    status:state.auth.status
  };
};

const HomeConnect = connect(mapStateToProps, { checkLogin })(Home);

export default HomeConnect;