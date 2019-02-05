import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { getChatList, setActiveChat } from '../actions/ChatActions';

import List from '../components/ConversationsList/List';

class ConversationsList extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };

      this.props.getChatList( this.props.uid );
      this.openConversation = this.openConversation.bind(this);
  }

  componentDidUpdate() {
    if (this.props.activeChat != '') {
      this.props.navigation.navigate('InternalConversation');
    }
  }

  openConversation(data) {
    this.props.setActiveChat(data.key);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.chats}
          renderItem={({item}) => <List data={item} onPress={this.openConversation} />}
        />
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
    activeChat:state.chat.activeChat,
    chats:state.chat.chats
  };
};

const ConversationsListConnect = connect(mapStateToProps, { getChatList, setActiveChat })(ConversationsList);

export default ConversationsListConnect;