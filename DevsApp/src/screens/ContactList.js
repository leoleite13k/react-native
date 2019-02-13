import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getContactList, createChat } from '../actions/ChatActions';

import List from '../components/ContactList/List';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    this.openChat = this.openChat.bind(this);
  }

  componentDidMount() {
    this.props.getContactList(this.props.uid, () => {
      this.setState({loading:false});
    });
  }

  openChat(item) {
    this.props.createChat(this.props.uid, item.key);
    this.props.navigation.navigate('ConversationsStack');
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading && <ActivityIndicator size ="small" color="#512da8" />}
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
    marginTop: Platform.OS == 'ios'? 30 : 0,
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