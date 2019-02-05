import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getContactList, createChat } from '../actions/ChatActions';

import List from '../components/ContactList/List';

class ContactList extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };

      this.props.getContactList(this.props.uid);
      this.openChat = this.openChat.bind(this);
  }

  openChat(item) {
    this.props.createChat(this.props.uid, item.key);
    this.props.navigation.navigate('ConversationsStack');
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={this.props.contacts}
        renderItem={({item}) => <List data={item} onPress={this.openChat} />}
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
    uid:state.auth.uid,
    contacts:state.chat.contacts
  };
};

const ContactListConnect = connect(mapStateToProps, { getContactList, createChat })(ContactList);

export default ContactListConnect;