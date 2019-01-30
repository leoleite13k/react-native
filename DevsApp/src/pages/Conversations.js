import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { checkUser } from '../actions/ChatActions';

class Conversations extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Pagina de Conversa: Status - {this.props.status} - UID: {this.props.uid}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return{
    status:state.auth.status,
    uid:state.auth.uid
  };
};

const ConversationsConnect = connect(mapStateToProps, { checkUser })(Conversations);

export default ConversationsConnect;