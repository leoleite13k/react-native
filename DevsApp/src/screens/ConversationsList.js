import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';

import { checkUser } from '../actions/ChatActions';

class ConversationsList extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };
  }

  componentDidUpdate() {
    if (this.props.activeChat != '') {
      this.props.navigation.navigate('InternalConversation');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Página de Conversa
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
    uid:state.auth.uid,
    activeChat:state.chat.activeChat
  };
};

const ConversationsListConnect = connect(mapStateToProps, { checkUser })(ConversationsList);

export default ConversationsListConnect;