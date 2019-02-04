import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';

class InternalConversation extends Component {
  constructor(props) {
      super(props);

      this.state = {

      };
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
    uid:state.auth.uid
  };
};

const InternalConversationConnect = connect(mapStateToProps, { })(InternalConversation);

export default InternalConversationConnect;